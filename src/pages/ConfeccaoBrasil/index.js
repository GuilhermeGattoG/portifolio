import React from "react";
import Image from "../../components/atoms/Image";
import styles from "./styles.module.scss"

function ConfeccaoBrasil() {
  return (
    <div className={styles.dataAnalysesContainer}>
      <div id="title">
        <h1 className={styles.title}>Análise do Mercado de Confecção no Brasil</h1>
      </div>
      <div id="introduction">
        <h1>1. Introdução</h1>
        <p>Este estudo tem como objetivo investigar, com base de dados públicas, a existência de uma possível retração do setor de confecção em cenário nacional causada ou não pela substituição de mercadorias nacionais por importadas chinesas. Sendo esta, uma percepção tida como senso comum entre empresários do setor.</p>
        
        <h2>1.1. Contexto Econômico do Setor</h2>
        <p>Para que seja possível entender o contexto econômico, é preciso entender primeiramente como se dá a cadeia produtiva do segmento da moda.</p>
        <p>A figura abaixo ilustra de maneira simplificada como toda a cadeia produtiva apresenta suas dependências e ordens produtivas.</p>
        <Image src={"fluxograma-cadeia-de-producao-textil.png"} alt={"Cadeia Produtiva da Confecção"} width={"auto"}/>
        <p>Produtores de matéria-prima são os responsáveis por fornecer a matéria prima inicial, como algodão, derivados de petróleo, ou outros tipos de fibras. A indústria de transformação primária transforma a matéria-prima inicial em fio, utilizado pela indústria de transformação secundária para criação de malhas e tecidos. Após beneficiamentos como tingimento, estamparia, por exemplo, este material é entregue às confecções, que geram produtos acabados, as roupas, que serão distribuídas por canais de vendas para que aí sim, cheguem ao comprador.</p>
        <p>Para este estudo de caso, não é necessário a análise de toda a cadeia produtiva, mas sim, a fatia que se desenvolve da confecção em diante. Mas diferentemente da figura apresentada, uma análise mais realista do cenário, não permite simplificações como essas. E deve-se entender que no contexto macroeconômico, as confecções brasileiras competem diretamente com as importações do setor de vestuários. Portanto, a próxima imagem ilustra como de fato quais pontos serão analisados neste estudo.</p>
        <Image src={"fluxograma-partes-estudadas.png"} alt={"Partes Estudadas"} width={"auto"} />

        <h2>1.2. Problema Observado</h2>
        <p>Ao longo dos anos, empresários do setor apresentam a percepção de que a indústria nacional está em queda, e que com o passar do tempo vêm perdendo espaço competitivo para produtos importados, mais especificamente oriundos da China.</p>

        <h2>1.3. Perguntas de Negócio</h2>
        <p>Diante deste cenário, este estudo busca resposta para os seguintes questionamentos:</p>
        <ul>
          <li>Há retração na produção nacional das confecções?</li>
          <li>A alteração no volume de importações sugere substituição de mercadoria nacional?</li>
          <li>Há queda de demanda no setor?</li>
        </ul>

        <h2>1.4. Estratégia Metodológica</h2>
        <p>Para montar uma base de dados para análise desses questionamentos, foram utilizados dados públicos exclusivamente, que contemplam desempenho industrial, volume de importações e comportamento orçamentário de famílias ao longo do tempo. Para tratamento, foi utilizado a linguagem de programação Python, bem como bibliotecas voltadas para esse segmento, como Pandas.</p>
      </div>


      <div id="data-source">
        <h1>2. Fonte dos Dados</h1>
        <p>Conforme especificado, foram utilizadas apenas fontes de dados públicos. Dividido conforme as especificações a seguir:</p>
        
        <h2>2.1. Produção Industrial</h2>
        <p>Para as confecções foram usadas as tabelas da SIDRA da Produção Industrial Anual (PIA) e Pesquisa Industrial Mensal (PIM), onde uma demonstram o investimento nos produtos, produção através de indicadores, e a quantidade de empresas operantes.</p>
        <p>Para a coleta dos dados dos produtos, foi utilizado um link por ano, partindo do link a seguir com os registros de <a href="https://ftp.ibge.gov.br/Industrias_Extrativas_e_de_Transformacao/Pesquisa_Industrial_Anual/Produto">estatísticas do IBGE</a>. As informações iam do ano de 2002 à 2023, entretanto, conforme analisado posteriormente, os anos 2002 à 2004 foram retirados da análise por excesso de discrepância nos valores.</p>
        <p>Para indicadores de produção e quantidade de estabelecimentos, foi baixado em formato “.xslx”, com filtros para confecção e total de indústrias no Brasil entre os anos 2002 e 2023, respectivamente pela <a href="https://sidra.ibge.gov.br/Tabela/8888">tabela de produção</a> e <a href="https://sidra.ibge.gov.br/Tabela/1851">tabela de dados gerais das unidades locais industriais</a>.</p>

        <h2>2.2. Importações</h2>
        <p>Foram utilizados dados extraídos do valor em dólar e o peso em quilos da <a href="https://api-comexstat.mdic.gov.br/general?language=pt">API da COMEX STAT</a>, sendo necessário baixar os arquivos json ano a ano e filtrar posteriormente para que fosse possível agrupar apenas as informações relevantes para este projeto, sem que houvesse uma quantidade de informações excedente que sobrecarregasse o dispositivo utilizado no processamento.</p>
      
        <h2>2.3. Comércio Interno</h2>
        <p>Pontos de venda, se trata na realidade do comércio atacadista e varejista presente no Brasil. Para isso, foi coletado a tabela de Pesquisa Anual de Comércio (PAC), presente também no SIDRA, mais especificamente a tabela de <a href="https://sidra.ibge.gov.br/Tabela/1400">Demonstrativo de receita das empresas comerciais por divisão de comércio</a>, filtrando a receita total das empresas, do Brasil todo e apenas do segmento do vestuário, do ano de 2007 até 2023, sendo estes os anos disponíveis pela plataforma.</p>
      
        <h2>2.4. Consumo das Famílias</h2>
        <p>Esta é a camada que é representada por pessoas fora do ambiente profissional, ou seja, é o quanto cada pessoa gasta com vestuário. Para que seja possível entender o comportamento do brasileiro em relação ao vestuário, é preciso analisar os anos onde se teve uma censo mais completo e que buscou informações a respeito. Apenas os anos 2002 e 2008 possuem as informações de <a href="https://sidra.ibge.gov.br/Tabela/677">despesa média mensal familiar</a>, <a href="https://sidra.ibge.gov.br/Tabela/759”>número e tamanho de famílias</a> e também em 2018 <a href=”https://sidra.ibge.gov.br/Tabela/6715">despesa média mensal familiar</a> e <a href="https://sidra.ibge.gov.br/Tabela/6971">número e tamanho de famílias</a>.</p>
      
        <h2>2.5. Variáveis de Controle (IPCA, Câmbio)</h2>
        <p>Para auxiliar a normalização das informações, foram utilizadas as <a href="https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/aplicacao#!/recursos/CotacaoDolarPeriodo">cotações de dólar por período</a>, utilizados na conversão de dólar para real nos dados de importação.</p>
        <p>Também é utilizado o <a href="https://sidra.ibge.gov.br/Tabela/1737">Índice Nacional de Preços ao Consumidor Amplo (IPCA)</a>, para cálculo de normalização e ajuste de inflação da moeda brasileira ao longo dos anos.</p>
      </div>


      <div id="extraction-treatment">
        <h1>3. Extração e Tratamento</h1>
        <p>A única ferramenta utilizada no processo de extração e tratamento dos dados foi a linguagem de programação Python, juntamente com algumas bibliotecas auxiliares, sendo elas:</p>
        <ul>
          <li><span style={{fontWeight: "bold"}}>pandas:</span> Coleta, tratamento e manipulação de dados</li>
          <li><span style={{fontWeight: "bold"}}>matplotlib:</span> Plotagem de gráficos</li>
          <li><span style={{fontWeight: "bold"}}>time:</span> Evita estressar APIs que limitam requests por tempo</li>
          <li><span style={{fontWeight: "bold"}}>urllib3:</span> Permite requisições com restrições de segura</li>
          <li><span style={{fontWeight: "bold"}}>os:</span> Acessa os arquivos do computador que executa os scripts</li>
          <li><span style={{fontWeight: "bold"}}>zipfile:</span> Extração e manipulação de arquivos ".zip"</li>
        </ul>
        <p>Para cada base de dados, a maneira de manipular e tratar os dados foi única. O que se buscou ao longo deste processo foi normalizar os dados de maneira a deixar apenas uma periodicidade e as mesmas unidades de medidas.</p>
      </div>


      <div id="exploratory-analyses">
        <h1>4. Análise Exploratória</h1>
        <p>Esta análise exploratória teve como objetivo avaliar consistência, cobertura temporal e comportamento preliminar das variáveis econômicas em toda a cadeia a qual a confecção está inserida.</p>
        <p>Todas as variáveis monetárias foram deflacionadas utilizando o IPCA, com ano base de 2023. Em caso de séries mensais, para se padronizar a periodicidade anual, foram  agregados os valores.</p>
        <p>Os códigos utilizados para a análise exploratória encontram-se no repositório do GitHub referente à <a href="https://github.com/GuilhermeGattoG/data-projects/tree/main/confeccao-brasil"> este portfólio</a>.</p>
        
        <h2>4.1. Confecções</h2>
        <p>Dentre as séries da PIA, houve uma ruptura estrutural no PIA - Produtos, notada pela discrepância de dados de 2002 a 2004, sendo possível a observação conforme o gráfico abaixo mostra. Portanto, para preservar a comparabilidade dos dados, a análise dessa série contempla 2005 a 2023.</p>
        <Image src={"qtd-empresas-informantes.png"} alt={"Quantidade de Confecções Informantes"} width={"auto"}/>
        <p>Entre 2005 a 2014, houve um aumento no setor, até o pico histórico. De 2015 até 2023, tem-se uma retração no setor, sendo esta, conforme o gráfico, mais acentuada em 2020 devido à pandemia.</p>
        <Image src={"valor-producao-confeccoes.png"} alt={"Produção Anual das Confecções Brasileiras"} width={"auto"}/>
        <p>Observa-se crescimento real do setor em comparação ao início da série histórica; Entretanto, mesmo o crescimento acentuado pós pandemia, não foi suficiente para alcançar seu ápice histórico.</p>
        <p>Já para a parte de produção desta indústria, os valores avaliados são indicadores com ano base de 2022, sendo o primeiro gráfico abaixo para a produção industrial total do país, e a segunda somente das confecções.</p>
        <Image src={"prod-anual-industrias.png"} alt={"Produção Anual das Indústrias Brasileiras"} width={"auto"}/>
        <Image src={"prod-anual-confeccoes.png"} alt={"Produção Anual das Confecções Brasileiras"} width={"auto"}/>
        <p>A série de produção nacional indica crescimento constante com quedas em 2015-16 e 2020. Já a confecção vem enfrentando uma retração predominante. Ambos estão longe de seu ápice histórico, porém é possível notar que dentre a indústria geral, a variação nos indicadores em relação a esse período é de aproximadamente 15% positivas, enquanto na confecção 52% negativas.</p>
        <p>Além da diferença na intensidade da retração, é possível também notar que a confecção não consegue uma recuperação semelhante no pós-pandemia, com indicadores de 2023 sendo inferiores aos ano de 2020.</p>
        <p>Para finalizar o diagnóstico das confecções, será observado a quantidade de estabelecimentos deste setor no país, e se eles vão ao encontro da tendência industrial geral. O gráfico abaixo mostra essa quantidade total ao longo dos anos observados na série histórica, de 2007 a 2023.</p>
        <Image src={"qtd-industrias-brasil.png"} alt={"Quantidade de Indústrias no Brasil"} width={"auto"}/>
        <p>A trajetória até 2014 apresenta um crescimento com oscilações, tendo queda até 2020, e posteriormente, recuperando significativa no pós pandemia.</p>
        <Image src={"qtd-confeccoes-brasil.png"} alt={"Quantidade de Confecções no Brasil"} width={"auto"}/>
        <p>O gráfico com o número de confecções no Brasil indica resultado semelhante, com quedas significativas após 2015 e recuperação pós pandemia. Entretanto, diferentemente do cenário industrial, onde o ano de 2023 apresentava um crescimento de 12% em relação ao período de 2014, já nas confecções o cenário é uma redução de 10%.</p>
        <p>Os três indicadores apresentam inflexões temporalmente alinhadas até a pandemia. Crescimento até o ápice histórico em 2014-2016, seguido de queda. Entretanto, a quantidade de estabelecimentos e o valor dos produtos apresentam recuperação no período pós pandemia, diferentemente dos indicadores de produção, que seguem em queda.</p>
        <p>Mediante queda nos indicadores do setor interno, torna-se relevante a análise das importações do mesmo período.</p>

        <h2>4.2. Importações</h2>
        <p>Primeiramente, buscou-se entender as participações de cada país no quadro de importações de artigos de vestuário no Brasil. O gráfico mostra a porcentagem de participação no FOB (Free On Board), valor pelo qual o valor é enviado ao país, mostrando assim uma dominância da China.</p>
        <Image src={"percentual-importacoes-por-pais.png"} alt={"Percentual de Importação por País"} width={"auto"}/>
        <p>Para uma análise de volume de importações, é preciso entender os valores das importações, e a quantidade (peso físico) das mercadorias. Portanto, os dados do FOB serão convertidos para a moeda brasileira com as correções já citadas.</p>
        <Image src={"importacoes-kg.png"} alt={"Importações por KG"} width={"auto"}/>
        <Image src={"importacoes-fob-brl-corrigido.png"} alt={"Valor das Importações"} width={"auto"}/>
        <p>Ambos gráficos apontam dados semelhantes, com crescimento até 2015, queda significativa em 2016, oscilações e uma recuperação pós pandemia. Porém as variações não têm pesos semelhantes. Conforme o gráfico mostra a seguir:</p>
        <Image src={"importacoes-brl-por-kg.png"} alt={"Valor das Importações por KG"} width={"auto"}/>
        <p>Ao comparar este gráfico com os demais, nota-se que a partir da queda de 2014-2016, tem-se um aumento do valor importado toda vez que o preço por KG diminui e vice-versa. Isso sugere uma sensibilidade do mercado ao preço, sendo essa uma hipótese com potencial para futuras análises.</p>
        <p>Após a análise dos indicadores das fontes de produtos, seja via interna ou externa do país, tem-se como relevante a análise dos indicadores do comércio em período histórico semelhante.</p>

        <h2>4.3. Mercado Interno</h2>
        <p>O desempenho do comércio de peças de vestuário no Brasil também foi avaliado conforme o comércio total e isoladamente, conforme os 2 gráficos a seguir.</p>
        <Image src={"comercio-brasileiro.png"} alt={"Comércio Brasileiro"} width={"auto"}/>
        <Image src={"comercio-vestuario.png"} alt={"Comércio de Vestuário Brasileiro"} width={"auto"}/>
        <p>Ambos os gráficos apontam o comportamento semelhante a 2014, com ascensão seguida de queda, sendo esta mais acentuada no setor da confecção, entretanto o comércio brasileiro sofre inflexão durante a pandemia, como o setor de vestuário, que tem queda abrupta seguida de recuperação nos anos seguintes.</p>
        <p>É nítida a diferença de crescimento deste setor em comparação com a totalidade do país. Enquanto o comércio teve um aumento de 140%, o setor de vestuário cresceu apenas 70%.</p>
        <p>Concluído a tendência do comércio interno, torna-se relevante uma análise dos consumidores deste comércio, ou seja as pessoas/famílias.</p>

        <h2>4.4. Consumo das Famílias</h2>
        <p>Foi analisado primeiramente o consumo por família, não só em artigos de vestuário, como seu consumo total, conforme os gráficos abaixo.</p>
        <Image src={"consumo-mensal-familia.png"} alt={"Consumo Mensal por Família"} width={"auto"}/>
        <Image src={"consumo-mensal-vestuario.png"} alt={"Consumo Mensal com Vestuário por Família"} width={"auto"}/>
        <p>Esses dados indicam que houve um leve aumento de consumo por família e uma grande diminuição relativa no consumo de roupas.</p>
        <p>Entretanto, a diminuição do consumo de cada família, não significa necessariamente que o consumo do país como um todo caiu. O que corrobora com essa ideia é que a quantidade de pessoas por família diminuiu de 3,62 em 2002 para 3,00 em 2018.  Entretanto, o número de famílias cresceu, exigindo assim, a verificação desses valores agregados conforme os gráficos a seguir.</p>
        <Image src={"consumo-total-familias.png"} alt={"Consumo Total Estimado pelas Famílias"} width={"auto"}/>
        <Image src={"consumo-total-vestuario-familias.png"} alt={"Consumo com Vestuário Estimado pelas Famílias"} width={"auto"}/>
        <p>Esses gráficos apontam um consumo maior da população brasileira com o passar dos anos, mas o de roupa retrai em 2018 se comparado com 2008.</p>

        <h2>4.5. Síntese das Evidências Exploratórias</h2>
        <p>Os indicadores analisados indicam expansão na trajetória do setor até 2014-2016, seguida de uma inflexão negativa. Tem-se uma recuperação não homogênea nos indicadores após a pandemia, especialmente os indicadores de produção industrial, que seguem em queda.</p>
        <p>Observava-se também um aumento nas importações ao longo da série histórica. Um aumento também no comércio brasileiro, o qual o segmento de vestuário não consegue acompanhar. Quanto aos consumidores finais, os dados indicam redução no consumo relativo e total de peças de vestuário, diferentemente dos consumos totais, que apresentam apenas aumento.</p>
        <p>Esse conjunto de informações, indicam mudanças relevantes no setor ao longo da série histórica, exigindo uma análise mais aprofundada na seção seguinte.</p>

      </div>


      <div id="results">
        <h1>5. Resultados</h1>
        <p>A sequência de informações obtidas através das análises exploratórias, sugere resultados diferentes para setores diferentes. Para que sejam sintetizadas e integradas entre si, será feito uma análise da cadeia em ordem reversa ao andamento de um produto, sendo assim, primeiramente os resultados dos consumidores, seguidos pelos fornecedores.</p>
        <p>A análise exploratória das séries indica comportamentos distintos entre os diferentes elos da cadeia do vestuário. Para integrar esses resultados, será adotado a ordem inversa do fluxo produtivo, iniciando pelo consumo e comércio, posteriormente, analisando os fornecedores do mercado e por fim, sua integração.</p>

        <h2>5.1. Comércio e Consumo</h2>
        <p>Comparando o comportamento relatado e deduzido dos gastos familiares com os de comércio, tem-se direção semelhante, entretanto, com pesos diferentes. Enquanto no de 2008 para 2018, a dedução da soma dos gastos de todas as famílias teve um crescimento de aproximadamente 19%, enquanto o crescimento do comércio 46%. Já para o vestuário, um apresenta declínio, enquanto o outro mostra ascensão neste mesmo período.</p>
        <p>Não é possível se chegar a uma conclusão sólida da motivação de tal desencontro de tendência histórica. Algumas hipóteses poderiam ser levantadas, como por exemplo, lojistas buscando mercadorias no atacado em grandes centros de vendas, para que então seja revendido, forçando assim com que entre nas estatísticas tanto o valor da venda no atacado quanto a revenda no varejo. No entanto, essa hipótese, assim como outras não mencionadas, exigem uma investigação adicional, na qual nem tem foco este trabalho.</p>
        <p>Logo, para se entender qual caminho provavelmente foi tomado, tanto pela construção quanto pela maior complexidade da série, adota-se como interpretação mais plausível que houve um aumento no consumo de peças de vestuário no período, ainda que em ritmo inferior ao restante do comércio geral.</p>

        <h2>5.2. Fornecedores de Peças de Vestuário</h2>
        <p>Tanto as indústrias nacionais quanto os produtos vindos de outros países são os responsáveis por alimentar o comércio brasileiro, e com forte dominância da China, as importações, assim como a indústria sofreram queda nos períodos de baixa econômica do país, como após meados de 2014 e com a pandemia em 2020.</p>
        <p>A primeira grande diferença entre essas duas fontes, é a intensidade dos valores ao longo da série histórica. Considerando como o início da série comparável 2007 e o último ano disponível 2023, nota-se um crescimento de 242% no valor e 163% no volume das importações, enquanto a indústria 32% nos valores  e queda de 45% no volume de produção, segundo os indicadores.</p>
        <p>Torna-se também interessante a análise de como são finalizadas essas séries em comparação ao pico histórico de ambos os casos, para que se tenha um comparativo histórico do quanto se perdeu ao longo do tempo, e se em ambos os casos, a intensidade da perda é semelhante. Para isso, verifica-se que uma queda de 33% e 22% para importação, e 17% e 47% para a confecção.</p>
        <p>Comparando-se ambos os resultados, surge como indicativo principal que o crescimento das importações é significativamente superior ao crescimento da indústria nacional. Entretanto, eles têm comportamentos diferentes, observa-se que após seus respectivos picos históricos, as importações apresentam retração menos intensa que a produção industrial nacional, cujo volume continua em trajetória descendente ao longo do período mais recente.</p>

        <h2>5.3. Síntese dos Resultados</h2>
        <p>Quando se analisa em conjunto as inflexões dos setores, tem-se um cenário onde o crescimento relativo das importações ao longo do período de 2007 até 2023 tem uma intensidade muito superior à do comércio e produção interna no país.</p>
        <p>Entretanto, conforme já mencionado, os valores e o volume não andam em sentidos paralelos durante toda a série histórica, mostrando um resultado aproximado conforme a tabela abaixo, que descreve as mudanças no período citadas no parágrafo anterior.</p>
        <table className={styles.tabelaSinteseResultados}>
          <tr>
            <td></td>
            <td>Confecção</td>
            <td>Importação</td>
            <td>Comércio</td>
          </tr>
          <tr>
            <td>Valor</td>
            <td><span style={{color: "darkgreen"}}>+32%</span></td>
            <td><span style={{color: "darkgreen"}}>+242%</span></td>
            <td><span style={{color: "darkgreen"}}>+9%</span></td>
          </tr>
          <tr>
            <td>Peso</td>
            <td><span style={{color: "darkred"}}>-45%</span></td>
            <td><span style={{color: "darkgreen"}}>+163%</span></td>
            <td>N.I.</td>
          </tr>
        </table>
        <p>Isso pode indicar não somente que há a possibilidade da substituição de produtos nacionais por importados, como também que pode haver uma alteração no comportamento dos consumidores.</p>
        <p>O aumento dos valores de produção nacional juntamente com a queda no volume de produção, apontam a possibilidade de produção de peças com maior valor agregado, enquanto que as importações apresentam comportamento oposto após o auge histórico, coincidindo coincidindo com anos em que o preço médio por kg das importações se encontra em níveis mais baixos.</p>
      </div>


      <div id="conclusion">
        <h1>6. Conclusão</h1>
        <p>Com base nas análises realizadas ao longo deste trabalho, é possível retomar as questões propostas na seção '1. Introdução', e sintetizar os principais resultados obtidos.</p>
        
        <ul>
          <li><span style={{fontWeight: "bold"}}>Há retração na produção nacional das confecções?</span></li>
        </ul>
        <p>Observa-se retração nos indicadores de produção ao longo da série analisada. Porém, os valores monetários da produção apresentam crescimento real quando comparados ao início da série histórica apresentam um crescimento real, ainda que não sejam tão elevados quanto o seu pico histórico. Isso sugere que possivelmente o setor apresenta mais participação em peças de maior valor agregado.</p>
        <br/>
        <br/>

        <ul>
          <li><span style={{fontWeight: "bold"}}>A alteração no volume de importações sugere substituição de mercadoria nacional?</span></li>
        </ul>
        <p>Os indicadores, apontam que pode haver substituição parcial de mercadoria nacional por importada, principalmente, em peças de valores agregados menores. Resultado condizente com o crescimento significativamente maior das importações em comparação com a indústria nacional. Entretanto, afirmar isso categoricamente exige mais estudos e evidências.</p>
        <br/>
        <br/>

        <ul>
          <li><span style={{fontWeight: "bold"}}>Há queda de demanda no setor?</span></li>
        </ul>
        <p>É apontado uma queda de demanda no setor em relação ao auge histórico, que não acompanha o restante do comércio brasileiro, ficando abaixo do geral. Entretanto, a intensidade dessa queda é acompanhada por queda nas importações, ainda que esta tenha uma intensidade inferior.</p>
        <p>Sendo assim, é possível dizer que tem queda de demanda se comparado com o auge histórico, mas que ela por si só, não traz fortes indícios de crise no setor como um todo, e sim de que há alteração no comportamento dos consumidores.</p>
        <br/>
        <br/>

        <p>Portanto, este trabalho aponta mais para uma mudança no comportamento e estrutura das confecções do que uma retração total no setor. Queda de volume de produção, com aumento de valor monetário das confecções, juntamente com um crescimento das importações em intensidade diferente e variações que convergem com preços por kg inferiores, sugerem um cenário mais complexo do que apenas uma queda do setor. Diferindo parcialmente da percepção dos empresários do setor, mencionados anteriormente.</p>
      </div>
    </div>
  );
}

export default ConfeccaoBrasil;