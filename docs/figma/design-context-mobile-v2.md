# Design Context — Mobile v2 (node 246:61)

File key: `KFwKivY4ybcHwz8cr4M4Ve`
Fetched via `mcp__figma__get_design_context` (modo econômico, sem screenshot/metadata/variáveis — conforme PRD de correção seção 2.2).

## O que mudou vs. v1 (`design-context-mobile-v1.md`)

- **Fundo, decoração e nav bar: idênticos ao v1.** Mesmo gradiente (`256.8444...deg`), mesma ilustração decorativa (`rotate-[14.73deg]`, `left:-288px top:-58px w:1048.052px h:1068.477px`), mesmo nav bar (`data-node-id="252:70"`, padding `30px/24px`, mesmos insets do logo `70.43%/8.72%/10.43%/33.09%` e `0/0/40.64%/0`). Nenhuma mudança de token necessária aqui.
- **Os 3 botões deixaram de ser compostos (badge + ícone + texto HTML) e viraram grupos únicos flatten­ados** (`Group 16 1`, `Group 17 1`, `Group 19 1`), cada um com o nome da vitrine já convertido em paths de vetor (não há `<text>`). Cada botão precisou ser exportado como SVG único via `download_assets` (ver seção 4 do PRD de correção) — não dá pra reconstruir a partir dos fragmentos que o `get_design_context` retorna (ele decompõe o botão em 20+ assets: forma do cartão, textura, e um `<Vector>` por traço de letra).
- **Contêiner dos botões:** `left-[93px] top-[103px]` (v1 era `left-[91px] top-[120px]`) — pequeno deslocamento, mas mesmo `gap-[44px]` e mesma largura de referência `w-[207px]`. Como o layout é centralizado via flexbox (não replico posições absolutas), essa diferença não muda a implementação.
- **Tamanhos individuais dos cartões:**
  - Vitrine Tecnológica: `207×205` (igual ao v1)
  - Vitrine de Startups: `207×216` — **11px mais alto** que os outros dois (sobra de espaço no topo do viewBox, provavelmente pra acomodar o rastro de chama do foguete saindo do cartão)
  - Vitrine de Laboratórios: `207×205` (igual ao v1)
- **Raio do cartão:** confirmado 15px (igual ao v1), lido direto do path exportado (`C6.71573 0 0 6.71573 0 15...`).
- **Cor de fundo do cartão:** `#F3F4F6` (igual ao v1/tokens.css, nenhuma mudança).

## Assets exportados (via `download_assets`, não do `get_design_context`)

Salvos em `src/assets/vitrines/`:
- `vitrine-tecnologica.svg` (node `257:576`)
- `vitrine-startups.svg` (node `257:600`)
- `vitrine-laboratorios.svg` (node `257:613`)

Cada SVG veio com uma textura de fundo embutida em base64 (~587KB cada, idêntica nos 3 arquivos) — troquei manualmente pelo PNG já reduzido do projeto (161KB) pra não inflar o bundle; ver relatório final para detalhes.

## Código de referência bruto (não usar literal — ver nota acima sobre texto em paths)

Estrutura idêntica à v1 pra fundo/nav bar; a diferença relevante é o bloco dos botões, agora assim (resumido, sem os ~60 `<Vector>` individuais de contorno de letra):

```jsx
<div className="absolute content-stretch flex flex-col gap-[44px] items-end left-[93px] top-[103px] w-[207px]" data-node-id="257:575">
  <div className="h-[205px] overflow-clip relative shrink-0 w-[207px]" data-node-id="257:576" data-name="Group 16 1">
    {/* forma do cartão + textura + ~20 paths formando o ícone e "Vitrine Tecnologica" */}
  </div>
  <div className="h-[216px] overflow-clip relative shrink-0 w-[207px]" data-node-id="257:600" data-name="Group 17 1">
    {/* idem, "Vitrine de Startups" */}
  </div>
  <div className="h-[205px] overflow-clip relative shrink-0 w-[207px]" data-node-id="257:613" data-name="Group 19 1">
    {/* idem, "Vitrine de Laboratórios" */}
  </div>
</div>
```
