# Design Context — Desktop v2 (node 246:221)

File key: `KFwKivY4ybcHwz8cr4M4Ve`
Fetched via `mcp__figma__get_design_context` (modo econômico, sem screenshot/metadata/variáveis).

## O que mudou vs. v1 (`design-context-desktop-v1.md`)

- **Fundo, decoração e nav bar: idênticos ao v1.** Mesmo gradiente (`231.1195...deg`), mesma ilustração decorativa (`data-node-id="248:83"`, `left:-144px top:-106px w:1346.645px h:1391.921px`, sem rotação), mesmo nav bar (`data-node-id="246:225"`, padding `80px/25px`, mesmos insets de logo). Container dos botões também idêntico: `data-node-id="246:258"`, `gap-[72px]`, `top-[144px]`, `w-[1374px]`. Nenhuma mudança de token necessária.
- **A ordem dos botões no Figma agora é a mesma do mobile: Tecnológica → Startups → Laboratórios.** Isso resolve a divergência de ordem que existia entre mobile e desktop no v1 (lá o desktop tinha Tecnológica → Laboratórios → Startups). Não preciso mais decidir qual ordem usar — as duas telas concordam agora.
- **Os 3 botões agora são grupos únicos com técnica de clip/mask** (`Group 11 1`, `Group 22 1`, `Group 21 (1) 1`), nome da vitrine já em paths de vetor. Exportados via `download_assets` (mesma razão do mobile: fragmentado demais pro `get_design_context` reconstruir).
- **Tamanho do cartão:** `834×154` nos três botões (igual ao v1), raio confirmado 30px (`C13.4315 0 0 13.4315 0 30...` no path exportado).
- **Texto do botão de Startups:** no v1, o texto literal do node era "Vitrine de startaps" (minúsculo, com erro de digitação), divergindo do mobile ("Vitrine de Startups"). No primeiro export v2, o SVG mobile já veio certo ("Vitrine de Startups"), mas o SVG desktop ainda veio com "Vitrine de Startaps" (confirmado com zoom 300%). Reportei ao usuário, que corrigiu o texto direto no Figma (node do botão mudou de `257:793` para `259:846` depois da edição). Re-exportei só esse nó via `download_assets` e confirmei visualmente que agora está "Vitrine de Startups" nos dois breakpoints. `vitrine-startups-desktop.svg` foi atualizado com essa versão corrigida.

## Assets exportados (via `download_assets`)

Salvos em `src/assets/vitrines/` com sufixo `-desktop`:
- `vitrine-tecnologica-desktop.svg` (node `257:764`)
- `vitrine-startups-desktop.svg` (node `257:793`)
- `vitrine-laboratorios-desktop.svg` (node `257:811`)

Mesma textura de fundo embutida em base64 nos 3 (~377KB cada, idêntica) — reduzida manualmente pra ~192KB antes de salvar.

## Código de referência bruto (resumido, sem os ~15-20 `<Vector>` de contorno de letra por botão)

```jsx
<div className="absolute content-stretch flex flex-col gap-[72px] items-center justify-center left-px overflow-clip py-[60px] top-[144px] w-[1374px]" data-node-id="246:258">
  <div className="h-[154px] overflow-clip relative shrink-0 w-[834px]" data-node-id="257:764" data-name="Group 11 1">
    {/* forma do cartão (clip/mask) + ícone + "Vitrine Tecnológica" em paths */}
  </div>
  <div className="h-[154px] overflow-clip relative shrink-0 w-[834px]" data-node-id="257:793" data-name="Group 22 1">
    {/* idem, "Vitrine de Startups" */}
  </div>
  <div className="h-[154px] overflow-clip relative shrink-0 w-[834px]" data-node-id="257:811" data-name="Group 21 (1) 1">
    {/* idem, "Vitrine de Laboratórios" */}
  </div>
</div>
```
