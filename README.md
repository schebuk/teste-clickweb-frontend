🐾 Pett Love - Aplicação de Relacionamento para Pets
Um aplicativo web moderno para conectar pets e seus donos, facilitando encontros e interações entre animais.

🚀 Como Executar o Projeto
Pré-requisitos
Antes de começar, você precisa ter instalado em sua máquina:

Node.js (versão 14 ou superior)

npm ou yarn

📦 Instalação
Clone o repositório (se aplicável)

```bash
git clone [URL_DO_REPOSITORIO]
cd pett-love
```
Instale as dependências

```bash
npm install
# ou
yarn install
Execute o servidor de desenvolvimento
```
```bash
npm start
# ou
yarn start
```
Acesse a aplicação
Abra seu navegador e vá para:

```text
http://localhost:3000
```
🛠️ Scripts Disponíveis
No diretório do projeto, você pode executar:

npm start ou yarn start
Executa a aplicação no modo de desenvolvimento.
Abra http://localhost:3000 para visualizar no navegador.

A página será recarregada automaticamente se você fizer edições no código.

npm run build ou yarn build
Compila a aplicação para produção na pasta build.
Otimiza a compilação para melhor performance.
```
📁 Estrutura do Projeto
```text
pett-love/
├── public/
│   ├── images/          # Imagens estáticas
│   │   ├── logo-footer.png
│   │   ├── logo-pett-love.png
│   │   └── clickweb.png
│   └── index.html       # Template HTML principal
├── src/
│   ├── components/
│   │   ├── Header/      # Componente do cabeçalho
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   └── Footer/      # Componente do rodapé
│   │       ├── Footer.jsx
│   │       └── Footer.module.css
│   ├── App.js           # Componente principal
│   └── index.js         # Ponto de entrada
├── package.json         # Dependências e scripts
└── README.md           # Este arquivo
```
🎨 Componentes
Header (src/components/Header/)
Cabeçalho responsivo com:

Logo centralizado

Botão de menu hamburguer (mobile)

Botão "Entrar"

Menu dropdown responsivo

Footer (src/components/Footer/)
Rodapé responsivo com:

Newsletter para cadastro de email

Links de navegação

Seção de doações com PIX

Redes sociais

Informações legais e CNPJ

Botão para voltar ao topo

📱 Responsividade
A aplicação é totalmente responsiva com breakpoint em 768px:

Desktop (> 768px)
Layout com três colunas no rodapé

Newsletter alinhada à direita

Botão flutuante para voltar ao topo

Mobile (≤ 768px)
Layout simplificado

Newsletter centralizada

Menus e logo ocultos (apenas seções essenciais)

Botão de voltar ao topo como barra inferior

🎯 Funcionalidades
Cadastro na newsletter com validação de email

Copiar CNPJ para área de transferência com feedback

Voltar ao topo com rolagem suave

Menu responsivo que se adapta ao tamanho da tela

Design acessível com labels ARIA

🎨 Paleta de Cores
Cor	Código	Uso
Verde Principal	#556F4D	Fundo do footer
Verde Escuro	#506849	Fundo da barra inferior e ícones sociais
Amarelo	#F6C63B	Botões e hover states
Branco	#FFFFFF	Textos e fundos
Verde Botão Header	#546E4D	Gradiente do botão Entrar
📋 Dependências
Dependências Principais
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1"
}
```
Dependências de Ícones
```json
{
  "lucide-react": "^0.309.0"
}
```
🔧 Configuração do Ambiente de Desenvolvimento
Editor Recomendado: VS Code com extensões para React

Extensões Úteis:

ESLint

Prettier

React Developer Tools (extensão do navegador)

🐛 Solução de Problemas
Problema: Imagens não carregam
Solução: Certifique-se de que as imagens estão na pasta public/images/ com os nomes corretos:

logo-footer.png

logo-pett-love.png

clickweb.png

Problema: Estilos não aplicados
Solução: Verifique se os arquivos .module.css estão importados corretamente nos componentes.

Problema: Botões não funcionam no mobile
Solução: Teste em modo de desenvolvimento mobile ou usando as ferramentas de desenvolvedor do navegador.

📄 Licença
Este projeto é para fins demonstrativos. Todos os direitos de marca e conteúdo pertencem aos respectivos proprietários.

🤝 Contribuindo
Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)

Commit suas mudanças (git commit -m 'Add some AmazingFeature')

Push para a branch (git push origin feature/AmazingFeature)

Abra um Pull Request

📞 Suporte
Para questões ou suporte:

Verifique a seção de Solução de Problemas acima

Consulte a documentação oficial do React

Abra uma issue no repositório do projeto