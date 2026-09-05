import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createArticle, products, samples } from './data/sampleArticle.js';
import './prototype.css';

const assetRoot = `${import.meta.env.BASE_URL}assets/modular-editorial-system/`;
function SampleImage({ variant = 'cushion' }) {
  return <div className={`sample-photo sample-photo--${variant}`}><img src={`${assetRoot}image-module.png`} alt={variant === 'beauty' ? 'Cushion foundation detail' : 'AMUSE cushion foundation'} /></div>;
}
function ImagePreview({ module }) {
  const [slide, setSlide] = useState(0);
  const images = module.mode === 'single' ? module.images.slice(0, 1) : module.images;
  const current = Math.min(slide, images.length - 1);
  return <><SampleImage variant={images[current]} />{images.length > 1 && <div className="dots">{images.map((id, i) => <button key={`${id}-${i}`} aria-label={`Show image ${i + 1}`} className={current === i ? 'active' : ''} onClick={(e) => { e.stopPropagation(); setSlide(i); }} />)}</div>}</>;
}
function App() {
  const [article, setArticle] = useState(createArticle);
  const [selected, setSelected] = useState('text1');
  const [tab, setTab] = useState('edit');
  const [notice, setNotice] = useState('Try changing the headline. Your preview updates as you type.');
  const [productId, setProductId] = useState(products[1].id);
  const [saved, setSaved] = useState(false);
  const module = article.modules.find(m => m.id === selected);
  function change(next) { setArticle(next); setSaved(false); }
  function patch(values) { change({ ...article, modules: article.modules.map(m => m.id === selected ? { ...m, ...values } : m) }); }
  function add(type) {
    const id = `${type}-${crypto.randomUUID()}`;
    const defaults = type === 'image' ? { mode: 'single', images: ['cushion'] } : type === 'text' ? { text: 'Write your story here.', style: 'body', bold: false, align: 'left' } : { products: [products[0].id] };
    change({ ...article, modules: [...article.modules, { id, type, ...defaults }] }); setSelected(id); setTab('edit'); setNotice('Module added. Select it in the preview to edit.');
  }
  function move(id, direction) {
    const modules = [...article.modules]; const index = modules.findIndex(m => m.id === id); const next = index + direction;
    if (next < 0 || next >= modules.length) return;
    [modules[index], modules[next]] = [modules[next], modules[index]]; change({ ...article, modules });
  }
  function reset(empty = false) { const next = createArticle(); change(empty ? { ...next, title: '', modules: [] } : next); setSelected(empty ? null : 'text1'); setNotice(empty ? 'Add your first module to begin.' : 'Sample article restored.'); }
  function save() {
    try { localStorage.setItem('article-studio-demo', JSON.stringify(article)); setSaved(true); setNotice('Demo saved in this browser. Nothing has been published.'); }
    catch { setNotice('Browser storage is unavailable. You can keep editing this session.'); }
  }
  function load() {
    try { const data = JSON.parse(localStorage.getItem('article-studio-demo')); if (!data || typeof data.title !== 'string' || !Array.isArray(data.modules) || !data.modules.every(m => typeof m.id === 'string' && ((m.type === 'text' && typeof m.text === 'string') || (m.type === 'image' && m.images?.length && m.images.every(id => samples.some(s => s.id === id))) || (m.type === 'product' && Array.isArray(m.products) && m.products.every(id => products.some(p => p.id === id)))))) throw Error(); change(data); setSelected(null); setNotice('Your saved demo is open.'); } catch { setNotice('No saved demo is available yet.'); }
  }
  return <div className="studio" data-tab={tab}>
    <header className="studio-header"><span className="brand-mark">O</span><h1>Article Studio</h1><span className="demo-badge">LIVE DEMO</span><div className="header-actions"><button onClick={() => reset()}>Reset demo</button><button className="primary" onClick={save}>{saved ? 'Saved locally ✓' : 'Save demo'}</button></div></header>
    <nav className="studio-rail" aria-label="Studio"><span>▱</span><span>▣</span><button className="rail-active" aria-label="Article settings" onClick={() => setSelected(null)}>✎</button><span>◇</span><span className="rail-bottom">⚙</span></nav>
    <div className="mobile-tabs"><button className={tab === 'edit' ? 'active' : ''} onClick={() => setTab('edit')}>Edit article</button><button className={tab === 'preview' ? 'active' : ''} onClick={() => setTab('preview')}>Mobile preview</button></div>
    <main className="preview-workspace"><div className="preview-label">MOBILE PREVIEW <span>360px</span></div><div className="phone-preview">
      {!article.modules.length && <div className="empty-preview"><span>＋</span><h2>Your story starts here.</h2><p>Add image, text, and product modules from the editing panel.</p></div>}
      {article.modules.map((m, i) => <section key={m.id} className={`preview-module ${selected === m.id ? 'selected' : ''}`} onClick={() => { setSelected(m.id); }}>
        <button className="select-module" aria-label={`Edit ${m.type} module ${i + 1}`} onClick={() => { setSelected(m.id); setTab('edit'); }}>Edit {m.type}</button>
        {selected === m.id && <div className="module-move"><button aria-label="Move module up" disabled={i === 0} onClick={(e) => { e.stopPropagation(); move(m.id, -1); }}>↑</button><button aria-label="Move module down" disabled={i === article.modules.length - 1} onClick={(e) => { e.stopPropagation(); move(m.id, 1); }}>↓</button></div>}
        {m.type === 'image' && <ImagePreview module={m} />}
        {m.type === 'text' && <div className={`article-text ${m.style}`} style={{ textAlign: m.align, fontWeight: m.bold ? 700 : 400 }}>{m.text || 'Write your story…'}</div>}
        {m.type === 'product' && <div className="product-preview">{m.products.length ? m.products.map(id => { const p = products.find(p => p.id === id); return <div className="product-card" key={id}><SampleImage /><div><small>{p.brand}</small><p>{p.name}</p><strong>{p.price}</strong> <del>{p.original}</del></div></div>; }) : <p>Add a sample product from the editing panel.</p>}<small className="sample-caption">Sample products · Demo prices</small></div>}
      </section>)}
      {!!article.modules.length && <div className="article-end">✳ ✳ ✳<span>Made with Article Studio</span></div>}
    </div></main>
    <aside className="inspector"><div className="inspector-heading"><button onClick={() => setSelected(null)}>{module ? '← Article settings' : 'Article settings'}</button>{module && <span>{module.type} module</span>}</div><div className="inspector-body">
    <p className="editor-hint" role="status">{notice}</p>
    {!module ? <><label>Article title<input value={article.title} placeholder="Enter article title" onChange={e => change({ ...article, title: e.target.value })} /></label><label>Publishing period <span className="field-note">Demo only</span></label><div className="date-fields"><input aria-label="Start date" type="date" value={article.start} onChange={e => change({ ...article, start: e.target.value })} /><span>→</span><input aria-label="End date" type="date" min={article.start} value={article.end} onChange={e => change({ ...article, end: e.target.value })} /></div></> : <>
    <p className="module-id">{module.type.toUpperCase()} / {String(article.modules.findIndex(m => m.id === selected) + 1).padStart(2, '0')}</p>
    {module.type === 'text' && <><div className="format-toolbar"><select aria-label="Text style" value={module.style} onChange={e => patch({ style: e.target.value })}><option value="heading">Heading 1</option><option value="body">Body text</option></select><button className={module.bold ? 'active' : ''} aria-label="Bold" aria-pressed={module.bold} onClick={() => patch({ bold: !module.bold })}><b>B</b></button>{['left', 'center', 'right'].map((align, i) => <button key={align} className={module.align === align ? 'active' : ''} aria-label={`Align ${align}`} aria-pressed={module.align === align} onClick={() => patch({ align })}>{['≡', '☰', '≡'][i]}</button>)}</div><textarea aria-label="Module text" className={module.style} value={module.text} onChange={e => patch({ text: e.target.value })} style={{ textAlign: module.align, fontWeight: module.bold ? 700 : 400 }} /></>}
    {module.type === 'image' && <><label>Image type</label><div className="segmented">{['single', 'carousel'].map(mode => <button key={mode} className={module.mode === mode ? 'active' : ''} onClick={() => patch({ mode })}>{mode === 'single' ? 'Single' : 'Carousel'} {module.mode === mode && '✓'}</button>)}</div><label>Choose a sample image</label><div className="sample-picker">{samples.map(s => <button key={s.id} onClick={() => patch({ images: module.mode === 'single' ? [s.id] : [...module.images, s.id] })}><SampleImage variant={s.variant} /><span>{s.name} ＋</span></button>)}</div><p className="field-note">Single replaces the image. Carousel adds another slide.</p><div className="image-list">{module.images.map((id, i) => <div key={`${id}-${i}`}><span>{String(i + 1).padStart(2, '0')}　{samples.find(s => s.id === id)?.name}</span><button aria-label={`Remove image ${i + 1}`} disabled={module.images.length === 1} onClick={() => patch({ images: module.images.filter((_, index) => index !== i) })}>×</button></div>)}</div></>}
    {module.type === 'product' && <><label>Add sample products</label><select aria-label="Sample product" value={productId} onChange={e => setProductId(e.target.value)}>{products.map(p => <option value={p.id} key={p.id}>{p.name}</option>)}</select><button className="add-product" disabled={module.products.includes(productId)} onClick={() => patch({ products: [...module.products, productId] })}>{module.products.includes(productId) ? 'Already added' : '+ Add product'}</button>{module.products.map(id => { const p = products.find(p => p.id === id); return <div className="product-row" key={id}><div><small>{p.id}</small><p>{p.name}</p><strong>{p.price}</strong></div><button aria-label={`Remove ${p.name}`} onClick={() => patch({ products: module.products.filter(item => item !== id) })}>×</button></div>; })}<p className="field-note">Sample catalog for this prototype. No live inventory or checkout.</p></>}
    <button className="delete-module" onClick={() => { change({ ...article, modules: article.modules.filter(m => m.id !== selected) }); setSelected(null); }}>Delete module</button></>}
    <div className="add-modules"><label>Add new module</label><div>{[['image', '▧', 'Image'], ['text', '≡', 'Text'], ['product', '♧', 'Product card']].map(([type, icon, name]) => <button key={type} onClick={() => add(type)}><span>{icon}</span>{name}</button>)}</div></div>
    <div className="demo-actions"><button onClick={() => reset(true)}>Start from scratch</button><button onClick={load}>Load saved demo</button></div>
    </div></aside>
  </div>;
}
createRoot(document.getElementById('root')).render(<App />);
