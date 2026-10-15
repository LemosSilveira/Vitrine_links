# Design Context — Desktop (node 246:221)

File key: `KFwKivY4ybcHwz8cr4M4Ve`
Fetched via `mcp__figma__get_design_context`. Screenshot saved at `screenshot-desktop.png` (1440×1024, via `get_screenshot`).

> Referência bruta (React+Tailwind gerado pelo MCP). NÃO copiar literalmente — converter para os componentes/CSS Modules do projeto.

## Resumo visual
- Fundo: gradiente linear 231.12deg, de `rgb(107,63,142)` (17.988%) até `var(--roxoagencia/100%, rgb(92,6,157))` (90.938%). Ângulo diferente do mobile (256.84deg) — provavelmente o mesmo gradiente rotacionado pela proporção do frame; manter como gradiente diagonal consistente, ajustar ângulo por breakpoint se necessário para bater com o screenshot.
- Mesma ilustração decorativa de fundo (textura "mão"/folha), versão maior (`imgGroup10`), sem rotação explícita no código (ao contrário do mobile que tem `rotate-[14.73deg]`).
- Nav bar: logo UFC Inova (mesmas duas partes SVG), frame 1440px, padding 80px horizontal / 25px vertical, altura 144px.
- Três cartões empilhados verticalmente (mesmo padrão do mobile, mas em layout "pílula" horizontal larga): `border-radius:30px`, altura 154px, largura 834px, gap 72px entre cartões, container centralizado.
- Cada cartão: fundo `var(--fundosite,#f3f4f6)` + textura topográfica (`imgDesktop6`) em `opacity:16%` (mobile era 20% — leve diferença, tratar como a mesma textura).
- Badge do ícone: quadrado `#e4e4e4` opacity 70%, `border-radius:20px`, 141×135px.
- Texto do botão: fonte `UFC Inova:Bold`, tamanhos variam por item — 60px (Tecnológica), 55px (Laboratórios), 60px (Startups) — provavelmente auto-ajuste por comprimento do texto; usar um único `--fs-title` com `clamp()` e deixar o texto quebrar/ajustar, confirmar visualmente contra o screenshot.
- Cor do texto: `var(--roxoagencia/100%, #5c069d)`.

## ⚠️ Divergências encontradas entre mobile e desktop (ver pergunta ao usuário)

1. **Ordem dos botões diferente:**
   - Mobile (top→bottom): Tecnológica → Startups → Laboratórios
   - Desktop (top→bottom): Tecnológica → Laboratórios → Startups
2. **Texto do terceiro botão diverge:**
   - Mobile: "Vitrine de Startups" (node 252:373)
   - Desktop: "Vitrine de startaps" (node 250:262) — minúsculo e com erro de digitação ("startaps" em vez de "Startups")
3. **Acentuação de "Tecnológica":**
   - Mobile: "Vitrine Tecnologica" (sem acento, node 252:359)
   - Desktop: "Vitrine Tecnológica" (com acento, node 247:333)
   - A tabela do PRD (seção 6.2) usa "Vitrine Tecnológica" com acento — provável texto canônico.

## Código de referência (bruto, Tailwind — não usar literal)

```jsx
const imgDesktop6 = "https://www.figma.com/api/mcp/asset/2b08a48d-62d4-4522-b071-82abd063b08a.png";
const imgGroup10 = "https://www.figma.com/api/mcp/asset/e75ad338-a46a-4e2f-af8e-452727549c08.svg";
const imgGroup = "https://www.figma.com/api/mcp/asset/e4b9c027-ee15-4e6d-a285-e3342f5fe0c6.svg";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/aaa3abbc-bc10-4e86-be90-853e5e2874bb.svg";
const imgVetor = "https://www.figma.com/api/mcp/asset/e46bc8d8-8ab9-4c8a-ab78-abd9698e2fad.svg";
const imgGroup12 = "https://www.figma.com/api/mcp/asset/0e80f7a4-bc90-4b0d-aaf4-074df6a89cf8.svg";
const imgGroup7 = "https://www.figma.com/api/mcp/asset/1d80230e-6020-4306-b41e-f037f09757bd.svg";

export default function Desktop() {
  return (
    <div className="relative size-full" data-node-id="246:221" style={{ backgroundImage: "linear-gradient(231.11953370264195deg, rgb(107, 63, 142) 17.988%, var(--roxoagencia\\/100\\%,rgb(92, 6, 157)) 90.938%)" }} data-name="Desktop">
      <div className="absolute h-[1391.921px] left-[-144px] top-[-106px] w-[1346.645px]" data-node-id="248:83">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup10} />
      </div>
      <div className="absolute content-stretch flex h-[144px] items-center left-0 overflow-clip px-[80px] py-[25px] top-0 w-[1440px]" data-node-id="246:225" data-name="Nav_bar">
        <div className="h-[81px] overflow-clip relative shrink-0 w-[289px]" data-node-id="246:226" data-name="Assinaturas-UFC-Inova-02 2">
          <div className="absolute inset-[70.43%_8.72%_10.43%_33.09%]" data-node-id="246:227" data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
          </div>
          <div className="absolute inset-[0_0_40.64%_0]" data-node-id="246:245" data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[72px] items-center justify-center leading-[0] left-px overflow-clip py-[60px] top-[144px] w-[1374px]" data-node-id="246:258">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="247:335">
          <div className="col-1 h-[154px] ml-0 mt-0 overflow-clip relative rounded-[30px] row-1 w-[834px]" data-node-id="247:309" data-name="Desktop - 6">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[30px]">
              <div className="absolute bg-[var(--fundosite,#f3f4f6)] inset-0 rounded-[30px]" />
              <div className="absolute bg-size-[1024px_1024px] bg-top-left inset-0 opacity-16 rounded-[30px]" style={{ backgroundImage: `url("${imgDesktop6}")` }} />
            </div>
            <div className="absolute contents left-[27px] top-[9px]" data-node-id="248:235">
              <div className="absolute contents left-[27px] top-[9px]" data-node-id="248:234">
                <div className="absolute bg-[#e4e4e4] h-[135px] left-[27px] opacity-70 rounded-[20px] top-[9px] w-[141px]" data-node-id="248:233" />
                <div className="absolute h-[96px] left-[46px] top-[29px] w-[103.2px]" data-node-id="247:312" data-name="vetor">
                  <div className="absolute inset-[0_0_-0.52%_0]">
                    <img alt="" className="block max-w-none size-full" src={imgVetor} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] absolute font-['UFC_Inova:Bold'] leading-[1.143] left-[185px] not-italic text-[60px] text-[color:var(--roxoagencia\/100\%,#5c069d)] top-[48px] w-[729px]" data-node-id="247:333">
                Vitrine Tecnológica
              </p>
            </div>
          </div>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="250:264">
          <div className="col-1 h-[154px] ml-0 mt-0 overflow-clip relative rounded-[30px] row-1 w-[834px]" data-node-id="250:265" data-name="Desktop - 6">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[30px]">
              <div className="absolute bg-[var(--fundosite,#f3f4f6)] inset-0 rounded-[30px]" />
              <div className="absolute bg-size-[1024px_1024px] bg-top-left inset-0 opacity-16 rounded-[30px]" style={{ backgroundImage: `url("${imgDesktop6}")` }} />
            </div>
            <div className="absolute contents left-[27px] top-[9px]" data-node-id="250:266">
              <div className="absolute contents left-[27px] top-[9px]" data-node-id="250:267">
                <div className="absolute bg-[#e4e4e4] h-[135px] left-[27px] opacity-70 rounded-[20px] top-[9px] w-[141px]" data-node-id="250:268" />
              </div>
              <p className="[word-break:break-word] absolute font-['UFC_Inova:Bold'] leading-[1.143] left-[177px] not-italic text-[55px] text-[color:var(--roxoagencia\/100\%,#5c069d)] top-[48px] w-[729px]" data-node-id="250:290">
                Vitrine de Laboratórios
              </p>
            </div>
          </div>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="250:236">
          <div className="col-1 h-[154px] ml-0 mt-0 overflow-clip relative rounded-[30px] row-1 w-[834px]" data-node-id="250:237" data-name="Desktop - 6">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[30px]">
              <div className="absolute bg-[var(--fundosite,#f3f4f6)] inset-0 rounded-[30px]" />
              <div className="absolute bg-size-[1024px_1024px] bg-top-left inset-0 opacity-16 rounded-[30px]" style={{ backgroundImage: `url("${imgDesktop6}")` }} />
            </div>
            <div className="absolute contents left-[27px] top-[9px]" data-node-id="250:238">
              <div className="absolute contents left-[27px] top-[9px]" data-node-id="250:239">
                <div className="absolute bg-[#e4e4e4] h-[135px] left-[27px] opacity-70 rounded-[20px] top-[9px] w-[141px]" data-node-id="250:240" />
                <div className="absolute h-[106px] left-[45px] top-[24px] w-[106.311px]" data-node-id="252:58">
                  <div className="absolute inset-[-0.52%_-0.47%_-0.37%_-0.47%]">
                    <img alt="" className="block max-w-none size-full" src={imgGroup12} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] absolute font-['UFC_Inova:Bold'] leading-[1.143] left-[185px] not-italic text-[60px] text-[color:var(--roxoagencia\/100\%,#5c069d)] top-[48px] w-[729px]" data-node-id="250:262">
                Vitrine de startaps
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[103px] left-[323px] top-[455px] w-[91.576px]" data-node-id="252:30">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} />
      </div>
    </div>
  );
}
```

## Asset URLs (temporárias, expiram em ~7 dias — baixar antes de usar)

| var | tipo | url |
|---|---|---|
| imgDesktop6 | textura topográfica (png) | https://www.figma.com/api/mcp/asset/2b08a48d-62d4-4522-b071-82abd063b08a.png |
| imgGroup10 | "mão"/folha decorativa de fundo (svg) | https://www.figma.com/api/mcp/asset/e75ad338-a46a-4e2f-af8e-452727549c08.svg |
| imgGroup | logo UFC Inova, parte 1 (svg) | https://www.figma.com/api/mcp/asset/e4b9c027-ee15-4e6d-a285-e3342f5fe0c6.svg |
| imgGroup1 | logo UFC Inova, parte 2 (svg) | https://www.figma.com/api/mcp/asset/aaa3abbc-bc10-4e86-be90-853e5e2874bb.svg |
| imgVetor | ícone Vitrine Tecnológica (svg) | https://www.figma.com/api/mcp/asset/e46bc8d8-8ab9-4c8a-ab78-abd9698e2fad.svg |
| imgGroup12 | ícone Vitrine de Startups / foguete (svg) | https://www.figma.com/api/mcp/asset/0e80f7a4-bc90-4b0d-aaf4-074df6a89cf8.svg |
| imgGroup7 | elemento decorativo solto (svg) | https://www.figma.com/api/mcp/asset/1d80230e-6020-4306-b41e-f037f09757bd.svg |

Nota: ícone de "Vitrine de Laboratórios" não aparece como `<img>` próprio no código do desktop (parece ausente/placeholder no node 250:264-250:268 — só o badge cinza, sem ícone visível). Confirmar contra o screenshot: o screenshot mostra claramente o ícone de erlenmeyer no card do meio, então o ícone deve vir de um asset que o MCP não expôs como variável separada (possivelmente dentro de `imgDesktop6` ou omitido por otimização). Usar o ícone de erlenmeyer do mobile (`imgGroup7` do design-context-mobile.md) como fonte, já que é o mesmo ícone visualmente.
