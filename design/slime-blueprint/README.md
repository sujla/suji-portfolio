# 슬라임 / 철조망 — 3D 제작안

## 현재 철조망 제작 기준

생성 이미지의 철조망 그림 대신 [좌표 도면](./cage-structure.svg)과 [구조 데이터](./cage-structure.json)를 사용한다. [3D 제작 화면](./cage-study.html)은 같은 좌표 데이터를 얇은 금속 봉과 작은 구형 이음새로 렌더링한다. 정면·측면·평면 전환, 회전 및 구조선 보기로 연결을 확인할 수 있다.

- 모델링 치수: 한 변 100 U, 면당 3×3칸, 봉 지름 0.5 U, 이음새 지름 2.2 U.
- 공유 노드 56개, 연결 선분 108개, 정사각 셀 54개. 여섯 외부 면에만 봉을 배치한다.
- `node design/slime-blueprint/build-cage-blueprint.mjs`가 중복·내부 봉, 선분 길이, 연결 차수와 오일러 특성을 검사하고 도면·JSON을 생성한다.
- 3D 제작 화면에는 철조망과 슬라임을 별도 오브젝트로 표시한다. 전체·철조망만·슬라임만 보기와 회전을 지원한다. 메인 히어로는 변경하지 않았으며 중력은 없다.
- [MathWorld 큐브 구조](https://mathworld.wolfram.com/Cube.html), [Three.js BoxGeometry](https://threejs.org/docs/pages/BoxGeometry.html), [OrthographicCamera](https://threejs.org/docs/pages/OrthographicCamera.html)를 참고했다.

## 기존 생성 콘셉트 시트

[블루프린트](./blueprint-v1.png) · [기준 이미지](../../assets/hero-concepts/grid-v3.png)

이 도면은 ImageGen으로 생성한 모델링 콘셉트 시트다. 정밀 CAD 도면이나 검증된 정투상도가 아니다. 오른쪽 투상도와 아래 분리도는 추정이며, 서로 정확히 대응하는 3D 형상을 보증하지 않는다. 기존 사이트는 변경하지 않았다.

## 원본을 기준으로 고정할 특징

- 크기와 방향이 다른 덩어리가 이어진 하나의 슬라임 표면.
- 상단의 큰 둥근 볼륨, 왼쪽 중간의 깊은 굴곡, 아래로 길게 이어지는 전면 돌출부.
- 가는 금속 봉, 작은 구형 이음새, 봉이 지나가며 눌리는 표면.
- 선명한 블루와 넓은 광택 반사.

## 모델링 시작값 — 실측 아님

| 항목 | 제안값 |
| --- | --- |
| 철조망 한 변 | 100 U |
| 면의 분할 | 3 × 3칸 |
| 봉의 배치 좌표 | 0, 33.3, 66.7, 100 U |
| 봉 지름 | 약 0.5 U |
| 이음새 지름 | 약 2.2 U |
| 중력 | 없음 |

U는 임의 모델링 단위다. 봉은 큐브의 여섯 외부 면에만 배치한다. 내부를 가로지르는 격자는 추가하지 않는다. 봉과 이음새 지름은 원본을 겹쳐 보면서 조정한다.

## 모델링 순서

1. 기준 이미지를 고정하고 철조망의 화면상 교차점을 맞춰 카메라와 큐브 비율을 먼저 조정한다. 정투영인지 원근투영인지 단정하지 않고, 원본 투영과의 차이로 판단한다.
2. 슬라임은 균일한 구 27개나 둥근 정육면체로 시작하지 않는다. 큰 비대칭 볼륨과 긴 전면 돌출부를 개별 제어 가능한 덩어리로 잡은 뒤 하나의 표면으로 합친다.
3. 원본 시점에서 외곽선, 왼쪽 굴곡, 전면 돌출부 끝점, 봉과 표면의 접촉 위치를 원본 오버레이로 비교한다.
4. 가려진 옆면과 뒷면을 연속적인 표면으로 연결한다. 이 부분은 복원이 아니라 추정 설계다.
5. 실루엣이 맞은 다음 블루 재질과 반사광을 조정한다. 재질만으로 형상 차이를 가리지 않는다.
6. 외형 검토가 끝나기 전에는 변형 인터랙션을 다시 적용하지 않는다. 중력은 적용하지 않는다.

생성 도면의 형태가 원본과 정확히 일치하는지는 검증되지 않았다. 최종 기준은 이 도면의 작은 추정 뷰가 아니라 원본 이미지다.


## 슬라임 3D 모델

- [형태 제어 데이터](./slime-shape.js): 상단 볼륨, 왼쪽 허리, 전면의 긴 돌출부 등을 서로 다른 위치·비율의 볼륨으로 정의한다. 가려진 후면 볼륨은 추정이다.
- [모델 생성기](./build-slime.mjs): 볼륨을 부드럽게 합친 뒤 외부 격자 접촉부의 홈을 만들고 하나의 삼각형 메시로 추출한다.
- [렌더링 모델](./slime-model.json) · [OBJ 모델](./slime-model.obj) · [검사 결과](./slime-model-spec.json)
- 생성 명령: `node design/slime-blueprint/build-slime.mjs`
- 연결된 표면 하나, 열린 모서리 없음, 유효한 좌표 및 생성 버퍼 크기를 검사한다.
- 이번 모델에는 중력이나 변형 시뮬레이션이 없다. 원본과의 정확한 시각적 일치는 보증하지 않으며, 브라우저에서 기준 시점의 실제 렌더를 확인했다. 원본과 형태 차이는 남아 있다.


### 색상·표면 보정

슬라임은 금속용 환경맵과 분리된 `slime-material.js`의 블루 셰이더를 사용한다. 과도한 백색 반사로 채도가 떨어지는 문제를 줄이고, 큰 스튜디오 반사광만 남겼다. 접촉부는 작은 터널을 파는 방식에서 연속적인 표면 변형과 후처리 스무딩으로 변경했다. 상단 높이와 전면 돌출부 비율도 조정했다.

## Reference fitting (current renderer)

The current mesh is produced by `fit-reference.py`, using `slime-base-model.json` as an immutable base. Run it with Python, NumPy, Pillow and SciPy installed. Running `build-slime.mjs` alone replaces the fitted result with the earlier procedural model.

The fitter calibrates a perspective camera against 17 manually annotated cage intersections, then fits the mesh's projected silhouette to a blue mask extracted from the reference. `reference-fit-report.json` records camera residuals and silhouette intersection-over-union; this measures silhouette agreement only, not overall visual fidelity. The generated reference does not have perfectly consistent ideal-cube intersections.

`slime-appearance.png` is an ImageGen edit removing the metal from the source image. `slime-material.js` projects that appearance onto the actual closed mesh at the reference angle. It blends toward procedural shading as the camera rotates away to avoid stretching the frontal texture across the sides. Lighting in the projected texture is baked; hidden surfaces remain inferred. No gravity is applied. This is not an exact reconstruction from an original 3D asset.

### Appearance texture prompt

Use case: precise-object-edit. Image 1 is the edit target. Remove ONLY all silver metal cage rods and all silver spherical junctions from this exact image. Where rods or junctions cover the blue object, reconstruct the blue surface immediately beneath them smoothly, matching the adjacent blue color, gloss, shading and reflections. Where metal is over white, restore white. Preserve the exact existing blue object's outer silhouette and every lobe contour, positions of the lobes, camera angle, perspective, placement, scale, rich electric blue colors, highlights, internal valleys and shadows. Do not redesign, round out, inflate or otherwise reshape the blue object. Preserve all visible original blue pixels as closely as possible. Maintain the exact 1536x1024 canvas, framing and white background. This is a front-view projected appearance texture for a real 3D mesh, so precise alignment to the input blue surface is critical. No metal anywhere, no grid, no new objects, no text, no diagrams. Change only removal of the silver cage and local reconstruction under the removed metal.


## Three-axis symmetry (current)

`node design/slime-blueprint/symmetrize-slime.mjs` clips the reference-facing positive octant of `slime-reference-model.json`, reflects it across all three coordinate planes and welds the seams. It exports the current model and OBJ. Every vertex has a reflected counterpart on each axis; all edges have two incident triangles. See `slime-symmetry-report.json`. The previous silhouette-fit score applies to the earlier asymmetric model, not this symmetric version. Run symmetry generation after reference fitting when updating the source.

The appearance projection also mirrors in the three planes. Reflections remain baked into the source texture. The cage now uses 0.6 U rods and 2.5 U joints. Metal base color is about 10% darker in sRGB channel values and environment intensity is increased by 10%; perceived metallic appearance is a visual adjustment, not a measured percentage.

## Visible-surface preservation (supersedes global symmetry)

Run `complete-hidden.py` with NumPy and SciPy. The input is `slime-reference-model.json`. Visible and contour vertices are protected; only hidden vertices borrow radial profiles from reflected visible directions across the three axes, with a gradual seam blend. Hidden displacement is limited to 8 U and stays on the original camera projection rays to preserve the reference silhouette. This is symmetry-based completion of hidden areas, not a globally symmetric object. `symmetrize-slime.mjs` is the superseded whole-object experiment and must not be used for the current result.

Cage rods are now 0.95 U, joints 3.4 U, checked against a 50% opacity overlay of the original image in the study's calibrated reference view. The new “원본 겹쳐보기” button exposes this comparison. Remaining cage alignment differences are visible in the overlay; thickness matching does not resolve the earlier camera residuals.


## 27-cell merge (current study)

`build-cell-field.py` creates 27 radius-13.5 U sphere fields and a separate target volume directly from the original image silhouette, with inferred rounded depth. No previous slime mesh is read. `cell-merge.js` interpolates their scalar fields and extracts a continuous surface with Marching Cubes. The image-derived appearance gradually blends in toward the merged endpoint. This controls silhouette and frontal appearance, but does not recover internal lobe geometry from the source lighting or establish an exact 3D reconstruction.

`check-cell-merge.mjs` verifies 27 connected components at separation and one at the merged endpoint, samples intermediate states, and exports `cell-merged.obj`. The study has reversible merge/split buttons and a scrubber, no gravity, and the existing original-image overlay.


## Continuous 3D material

The current renderer no longer loads or projects `slime-appearance.png`. All merge states use the same procedural blue surface shader. The original image is only used offline to constrain the target silhouette and in the explicitly toggled comparison overlay. Internal folds previously visible in the projected texture are not reconstructed by the current rounded-depth volume.

## Solid lobe reconstruction

The current target replaces rounded silhouette extrusion with 11 overlapping solid ellipsoidal lobes traced in source-image coordinates (`cell-lobes.json`). Each has independent footprint, tilt, depth center and depth radius. The original silhouette clips the union, and the field is smoothed before meshing at resolution 80. Depths are authored estimates, not recovered measurements. No appearance image is loaded or projected. Marching Cubes gradient caches are cleared on each shape update to avoid stale lighting normals. The target still differs from the source in lobe proportions, valleys and reflections; it is not an exact reproduction.

### Surface refinement

Refined the two upper front lobes and elongated folds, moved the interior bridge farther back to expose the central valley, and increased extraction resolution to 96. Broadened the main reflected panel, softened its edges and reduced small secondary highlights. The current endpoint check reports one connected surface; separation reports 27. This remains a manually estimated reconstruction, without image projection.


## Round-cell bulging (current)

The target now comes from 27 enlarged round volumes (radius 24.5 U) joined by smooth unions, rather than hand-traced front folds. A localized 2 U pressure term around exterior rods dimples the surface. Adjacent open cells bulge beyond the cage. This is a controlled implicit-shape animation, not a volume-conserving fluid simulation. Simultaneous spacing, cage splitting, and gravity-off behavior remain. The earlier image-lobe generator is retained as `build-reference-lobes.py`; it is not the active target.
