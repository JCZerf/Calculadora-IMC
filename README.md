# Calculadora de IMC

Uma calculadora de Índice de Massa Corporal (IMC) moderna e responsiva, desenvolvida com HTML, CSS e JavaScript.

## Funcionalidades

- Interface moderna e intuitiva
- Design responsivo para todos os dispositivos
- Cálculo preciso do IMC
- Classificação automática do resultado
- Tabela de referência sempre visível
- Validação de dados em tempo real
- Animações suaves e feedback visual

## Como usar

1. Digite sua altura em metros (ex: 1.75)
2. Digite seu peso em quilogramas (ex: 70)
3. Clique em "Calcular IMC" ou pressione Enter
4. Veja seu resultado com a classificação correspondente

## Classificações do IMC

| IMC          | Classificação      |
| ------------ | ------------------ |
| Menor que 16 | Magreza Grau III   |
| 16,0 a 16,9  | Magreza Grau II    |
| 17,0 a 18,4  | Magreza Grau I     |
| 18,5 a 24,9  | Adequado           |
| 25,0 a 29,9  | Pré-Obeso          |
| 30,0 a 34,9  | Obesidade Grau I   |
| 35,0 a 39,9  | Obesidade Grau II  |
| 40 ou mais   | Obesidade Grau III |

## Tecnologias utilizadas

- **HTML5** - Estrutura da página
- **CSS3** - Estilização e responsividade
- **JavaScript** - Lógica de cálculo e interatividade

## Como executar

### Opção 1: Servidor Local

```bash
# Navegue até a pasta do projeto
cd Calculadora-IMC

# Inicie um servidor local (Python)
python3 -m http.server 8000

# Acesse no navegador
http://localhost:8000
```

### Opção 2: Abrir diretamente

Simplesmente abra o arquivo `index.html` em qualquer navegador moderno.

## Estrutura do projeto

```
Calculadora-IMC/
├── index.html      # Página principal
├── style.css       # Estilos e responsividade
├── app.js          # Lógica da calculadora
└── README.md       # Documentação
```

## Características visuais

- **Gradiente moderno** no fundo
- **Cards com glassmorphism**
- **Cores categorizadas** para cada classificação
- **Animações suaves** em hover e transições
- **Layout em grid** responsivo

## Fórmula do IMC

```
IMC = peso (kg) / altura² (m)
```

## Melhorias futuras

- [ ] Gráfico de histórico de IMC
- [ ] Salvamento de dados localmente
- [ ] Modo escuro/claro
- [ ] Múltiplas unidades de medida
- [ ] Cálculo para crianças e adolescentes

## Licença

Este projeto é de uso livre para fins educacionais e pessoais.
