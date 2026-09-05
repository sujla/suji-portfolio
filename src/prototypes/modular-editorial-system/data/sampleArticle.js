export const samples = [
  { id: 'cushion', name: 'Dewy cushion', variant: 'cushion' },
  { id: 'beauty', name: 'Cushion detail', variant: 'beauty' },
];
export const products = [
  { id: 'A0098737167', name: 'Giverny Cushion Foundation', brand: 'Giverny', price: '$31.19', original: '$47.99' },
  { id: 'A1583710952', name: 'Dew Jelly Cushion', brand: 'AMUSE', price: '$28.00', original: '$35.00' },
  { id: 'A1129851129', name: 'Everyday Glow Set', brand: 'Sample collection', price: '$42.00', original: '$52.00' },
];
export const createArticle = () => ({ title: 'Embrace Natural Beauty', start: '', end: '', modules: [
  { id: 'image1', type: 'image', mode: 'carousel', images: ['cushion', 'beauty'] },
  { id: 'text1', type: 'text', text: 'Forget Flawlessness,\nEmbrace Natural Beauty', style: 'heading', bold: true, align: 'center' },
  { id: 'text2', type: 'text', text: "It’s time to embrace authenticity. In a world obsessed with perfection, there’s something truly beautiful about embracing your natural self. Skincare and makeup should enhance your individuality. Celebrate the unique features that make you, you.", style: 'body', bold: false, align: 'left' },
  { id: 'product1', type: 'product', products: ['A0098737167'] },
] });
