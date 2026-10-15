# Design Context — Mobile (node 246:61)

File key: `KFwKivY4ybcHwz8cr4M4Ve`
Fetched via `mcp__figma__get_design_context`. Screenshot saved at `screenshot-mobile.png` (390×884, via `get_screenshot`).

> Referência bruta (React+Tailwind gerado pelo MCP). NÃO copiar literalmente — converter para os componentes/CSS Modules do projeto.

## Resumo visual
- Fundo: gradiente linear 256.84deg, de `rgb(107,63,142)` (21.365%) até `var(--roxoagencia/100%, rgb(92,6,157))` (90.773%).
- Textura de fundo: ilustração de "mão"/folha roxa translúcida posicionada absolutamente (`imgGroup11`), decorativa.
- Nav bar no topo: logo "UFC Inova" (duas partes SVG: `imgGroup` + `imgGroup1`), padding 30px horizontal / 24px vertical, largura total do frame 390px.
- Três cartões de botão empilhados verticalmente, gap 44px, container com `left:91px top:120px width:207px` (nota: isso é claramente um valor de posicionamento do frame-exemplo, mas os cartões visualmente ocupam quase a largura toda — tratar como artefato de export; confiar no screenshot).
- Cada cartão: `border-radius:15px`, altura 205px, fundo `var(--fundosite,#f3f4f6)` + textura topográfica roxa sutil (`imgRectangle14`) em `opacity:20%`, com um "badge" cinza claro (`#e4e4e4`, opacity 70%, radius 10px) atrás do ícone.
- Ícone de cada vitrine (SVG próprio, cor roxa sólida):
  - Tecnológica: `vetor` (ícone de lâmpada/circuito) — `imgVetor`
  - Startups: `imgGroup14` (ícone de foguete)
  - Laboratórios: `imgGroup7` (ícone de erlenmeyer/frasco)
- Texto do botão: fonte `UFC Inova:Bold`, `font-size:28px`, `line-height:1.143`, cor `var(--roxoagencia/100%, #5c069d)`.
- Textos (ordem do frame mobile, de cima para baixo):
  1. "Vitrine Tecnologica" (sem acento no texto bruto do node 252:359 — screenshot também renderiza sem acento)
  2. "Vitrine de Startups" (node 252:373)
  3. "Vitrine de Laboratórios" (node 252:377, com acento)

## Código de referência (bruto, Tailwind — não usar literal)

```jsx
const imgRectangle14 = "https://www.figma.com/api/mcp/asset/5a6dc5d3-4fb0-4f99-98a6-7263f0be325f.png";
const imgGroup11 = "https://www.figma.com/api/mcp/asset/a9ab3e71-099b-49eb-b7e0-80ceec33b16d.svg";
const imgVetor = "https://www.figma.com/api/mcp/asset/5c824ca5-5a75-4ee5-83f5-29e80c286616.svg";
const imgGroup14 = "https://www.figma.com/api/mcp/asset/7e004542-0f24-4e9b-919a-7ea84366ca66.svg";
const imgGroup7 = "https://www.figma.com/api/mcp/asset/06d8fb22-3728-4965-a28e-ca87236b6db4.svg";
const imgGroup = "https://www.figma.com/api/mcp/asset/fe8a2087-5653-4923-af92-9fee53de8c8b.svg";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/29082b05-bc34-46b7-a663-b61d29333cc4.svg";

export default function Mobile() {
  return (
    <div className="relative size-full" data-node-id="246:61" style={{ backgroundImage: "linear-gradient(256.8444284122905deg, rgb(107, 63, 142) 21.365%, var(--roxoagencia\\/100\\%,rgb(92, 6, 157)) 90.773%)" }} data-name="mobile">
      <div className="absolute flex h-[1068.477px] items-center justify-center left-[-288px] top-[-58px] w-[1048.052px]" data-node-id="252:111">
        <div className="flex-none rotate-[14.73deg]">
          <div className="h-[880.786px] relative w-[852.136px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup11} />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[44px] items-end leading-[0] left-[91px] top-[120px] w-[207px]" data-node-id="252:334">
        <div className="grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full" data-node-id="252:335">
          <div className="col-1 h-[205px] ml-0 mt-0 relative rounded-[15px] row-1 w-full" data-node-id="252:336">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[15px]">
              <div className="absolute bg-[var(--fundosite,#f3f4f6)] inset-0 rounded-[15px]" />
              <div className="absolute bg-size-[1024px_1024px] bg-top-left inset-0 opacity-20 rounded-[15px]" style={{ backgroundImage: `url("${imgRectangle14}")` }} />
            </div>
          </div>
          <div className="bg-[#e4e4e4] col-1 h-[60px] ml-[3.86%] mt-[11px] opacity-70 relative rounded-[10px] row-1 w-[30.44%]" data-node-id="252:337" />
          <div className="aspect-[51.60003662109375/48.00006103515625] col-1 ml-[6.28%] mt-[18px] relative row-1 w-[24.93%]" data-node-id="252:338" data-name="vetor">
            <div className="absolute inset-[0_0_-1.04%_0]">
              <img alt="" className="block max-w-none size-full" src={imgVetor} />
            </div>
          </div>
          <p className="[word-break:break-word] col-1 font-['UFC_Inova:Bold'] leading-[1.143] ml-[4.83%] mt-[106px] not-italic relative row-1 text-[28px] text-[color:var(--roxoagencia\/100\%,#5c069d)] w-[90.34%]" data-node-id="252:359">
            Vitrine Tecnologica
          </p>
        </div>
        <div className="grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full" data-node-id="252:360">
          <div className="col-1 h-[205px] ml-0 mt-0 relative rounded-[15px] row-1 w-full" data-node-id="252:361">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[15px]">
              <div className="absolute bg-[var(--fundosite,#f3f4f6)] inset-0 rounded-[15px]" />
              <div className="absolute bg-size-[1024px_1024px] bg-top-left inset-0 opacity-20 rounded-[15px]" style={{ backgroundImage: `url("${imgRectangle14}")` }} />
            </div>
          </div>
          <div className="bg-[#e4e4e4] col-1 h-[60px] ml-[3.86%] mt-[11px] opacity-70 relative rounded-[10px] row-1 w-[30.44%]" data-node-id="252:362" />
          <div className="col-1 h-[43px] ml-[8.7%] mt-[19px] relative row-1 w-[20.83%]" data-node-id="252:363">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup14} />
          </div>
          <p className="[word-break:break-word] col-1 font-['UFC_Inova:Bold'] leading-[1.143] ml-[4.83%] mt-[106px] not-italic relative row-1 text-[28px] text-[color:var(--roxoagencia\/100\%,#5c069d)] w-[90.34%]" data-node-id="252:373">
            Vitrine de Startups
          </p>
        </div>
        <div className="grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full" data-node-id="252:374">
          <div className="col-1 h-[205px] ml-0 mt-0 relative rounded-[15px] row-1 w-full" data-node-id="252:375">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[15px]">
              <div className="absolute bg-[var(--fundosite,#f3f4f6)] inset-0 rounded-[15px]" />
              <div className="absolute bg-size-[1024px_1024px] bg-top-left inset-0 opacity-20 rounded-[15px]" style={{ backgroundImage: `url("${imgRectangle14}")` }} />
            </div>
          </div>
          <div className="bg-[#e4e4e4] col-1 h-[60px] ml-[3.86%] mt-[11px] opacity-70 relative rounded-[10px] row-1 w-[30.44%]" data-node-id="252:376" />
          <p className="[word-break:break-word] col-1 font-['UFC_Inova:Bold'] leading-[1.143] ml-[4.83%] mt-[106px] not-italic relative row-1 text-[28px] text-[color:var(--roxoagencia\/100\%,#5c069d)] w-[90.34%]" data-node-id="252:377">
            Vitrine de Laboratórios
          </p>
          <div className="col-1 h-[44.501px] ml-[9.66%] mt-[19px] relative row-1 w-[19.12%]" data-node-id="252:378">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex items-center left-0 overflow-clip px-[30px] py-[24px] top-0 w-[390px]" data-node-id="252:70" data-name="nav_bar">
        <div className="h-[36px] overflow-clip relative shrink-0 w-[128px]" data-node-id="252:71" data-name="Assinaturas-UFC-Inova-02 2">
          <div className="absolute inset-[70.43%_8.72%_10.43%_33.09%]" data-node-id="252:72" data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
          </div>
          <div className="absolute inset-[0_0_40.64%_0]" data-node-id="252:90" data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
          </div>
        </div>
      </div>
    </div>
  );
}
```

## Asset URLs (temporárias, expiram em ~7 dias — baixar antes de usar)

| var | tipo | url |
|---|---|---|
| imgRectangle14 | textura topográfica (png) | https://www.figma.com/api/mcp/asset/5a6dc5d3-4fb0-4f99-98a6-7263f0be325f.png |
| imgGroup11 | "mão"/folha decorativa de fundo (svg) | https://www.figma.com/api/mcp/asset/a9ab3e71-099b-49eb-b7e0-80ceec33b16d.svg |
| imgVetor | ícone Vitrine Tecnológica (svg) | https://www.figma.com/api/mcp/asset/5c824ca5-5a75-4ee5-83f5-29e80c286616.svg |
| imgGroup14 | ícone Vitrine de Startups / foguete (svg) | https://www.figma.com/api/mcp/asset/7e004542-0f24-4e9b-919a-7ea84366ca66.svg |
| imgGroup7 | ícone Vitrine de Laboratórios / erlenmeyer (svg) | https://www.figma.com/api/mcp/asset/06d8fb22-3728-4965-a28e-ca87236b6db4.svg |
| imgGroup | logo UFC Inova, parte 1 (svg) | https://www.figma.com/api/mcp/asset/fe8a2087-5653-4923-af92-9fee53de8c8b.svg |
| imgGroup1 | logo UFC Inova, parte 2 (svg) | https://www.figma.com/api/mcp/asset/29082b05-bc34-46b7-a663-b61d29333cc4.svg |
