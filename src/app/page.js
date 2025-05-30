import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import {FaFlagUsa, FaFlagBrazil} from 'react-icons/fa';
import {Analytics } from "@vercel/analytics/react"
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (

    <div>
      <div className='bg-neutral-900 grid grid-rows-1'>
      </div>
      <main className='bg-neutral-900 px-5 flex items-center justify-center'>

        <section className='min-h-screen basis-2/6'>

          <div className='text-center p-10'>

            <h2 className='text-5xl py2 text-slate-100 font-medium'>Vinicius Santos</h2>

            <h3 className='text-2xl py-2 text-slate-100'>Desenvolvedor. Analista. Solucionador de problemas</h3>

            <div className='relative mx-auto rounded-full w-80 h-85 mt-10 overflow-hidden'>
              <img src='/images/me1.jpg' alt='dev image'/>
            </div>

            <p className='text-md font-semibold py-5 leading-6 text-slate-100'>Desde 2021 atuando especificamente com tecnologia para melhorar processos e resultados dos lugares por onde eu passo</p>

            <div className='text-5xl flex justify-center gap-16 py-3 bg'>
              <a>
                <Link href='https://www.linkedin.com/in/vinicius-santos-a78732141/'><AiFillLinkedin className='cursor-pointer text-blue-700 bg-gray-100 rounded-md'/></Link>
              </a>
            </div>

            <div className='bg-neutral-900 text-slate-100'>
              <p className='text-center text-4xl font-normal'>Olá!</p>
              <br></br>
              <p className='text-center text-lg font-light'>Meu nome é Vinícius, e atualmente trabalho utilizando tecnolgia (códigos, scripts e análises) para trazer valor e vantagem estratégicas nos lugares onde atuo</p>
              <br></br>
              
              <div className='mt-20 mb-10 bg-neutral-900 p-7 rounded-2xl'>
                <p className='text-center text-3xl font-medium'>Experiência</p>
                <br></br>
                <p className='text-start text-3xl mt-5 font-medium'>Analista de Dados - Analista de CRM</p>
                <p className='text-start text-lg italic font-light'>V4 Company</p>
                <p className='text-start text-md font-light'><strong>Análise de dados | Desenvolvimento de CRM | ETL | Automação de processos</strong></p>
                <p className='text-start text-md font-light'>- Criação de ETLs para monitoramento de campanhas, baseado em AWS (S3, Glue, Redshift, QuickSight).</p>
                <p className='text-start text-md font-light'>- Criação de automações e cenários complexos para usos de diferentes setores dentro da empresa.</p>
                <p className='text-start text-md font-light'>- Desenvolvimento de CRM (Hubspot) e automações para a equipe comercial. Monitoramento de infraestrutura de rede local e nuvem.</p>
                <p className='text-start text-md font-light'>- Monitoramento de infraestrutura de rede local e nuvem.</p>
                <br></br>
                <p className='text-start text-3xl mt-5 font-medium'>Analista de Sistemas</p>
                <p className='text-start text-lg italic font-light'>Beelieve Group</p>
                <p className='text-start text-md font-light'><strong>Desenvolvimento de CRM | Análise de dados | ETL | Gerenciamento de infraestrutura de redes | Levantamento de requisitos | Arquitetura de sistemas</strong></p>
                <p className='text-start text-md font-light'>- Criação de ETLs para monitoramento de campanhas, baseado em AWS (S3, Glue, Redshift, QuickSight).</p>
                <p className='text-start text-md font-light'>- Criação de automações e cenários complexos para usos de diferentes setores dentro da empresa.</p>
                <p className='text-start text-md font-light'>- Desenvolvimento de CRM (Hubspot) e automações para a equipe comercial. Monitoramento de infraestrutura de rede local e nuvem.</p>
                <p className='text-start text-md font-light'>- Monitoramento de infraestrutura de rede local e nuvem.</p>
                <br></br>
                <p className='text-start text-3xl mt-5 font-medium'>Scrum Master</p>
                <p className='text-start text-lg italic font-light'>V2Saúde</p>
                <p className='text-start text-md font-light'>Responsável por facilitar e manter os ritos SCRUM dentro da equipe. Planejamento da sprint e priorização de cards, acompanhamento das user stories e seus desenvolvimentos, refinamento junto aos analistas e condução dos ritos como Demo e Retro</p>
                <br></br>
                <p className='text-start text-3xl mt-5 font-medium'>Analista de BI</p>
                <p className='text-start text-lg italic font-light'>V2Saúde</p>
                <p className='text-start text-md font-light'>Amazon Quicksight, reuniões diretamente com responsáveis das empresas atendidas e seus profissionais para entender suas solicitações, uso de SQL para extração de dados requisitados em solicitações e construção de análises e dashboards</p>
                <br></br>
                <p className='text-start text-3xl mt-5 font-medium'>Analista de BI | Administrador de Sistemas</p>
                <p className='text-start text-lg italic font-light'>GSeg</p>
                <p className='text-start text-md font-light'>Responsável por extração, transformação e carregamento dos dados para gerar dashboards e reports para análise de giro de estoque, acompanhamento financeiro e campanhas de venda</p>
                <p className='text-start text-md font-light'>Responsável pelo preservação e manutenção da infraestrutura de rede local</p>
                <br></br>
              </div>

              <div className='bg-neutral-900 mt-20 p-7 rounded-2xl'>
                <p className='text-center text-3xl font-medium'>Educação</p>
                <br></br>
                <p className='text-start text-3xl mt-5 font-medium'>Análise e Desenvolvimento de Sistemas</p>
                <p className='text-start text-md font-light'>Universidade de Mogi das Cruzes | Completo (12/23)</p>
                <br></br>
                <p className='text-start text-3xl mt-5 font-medium'>Matemática - Bacharelado</p>
                <p className='text-start text-md font-light mb-5'>Universidade Anhembi Morumbi | Cursando</p>
              </div>
              <br></br>
              <p className='text-center text-3xl mt-20 font-medium bg-neutral-900'>Projetos</p>
              <br></br>
              <p className='text-start text-3xl mt-5 font-medium bg-neutral-900'>Solara</p>
              <p className='text-start text-md italic font-light'>Programa para administração de condomínio<br></br>Pausado | Projeto acadêmico<br></br>Papel: backend, arquitetura de banco<br></br>Tecnologias: Java, SQL, Spring, React</p>
              <p className='text-start mt-1 text-md font-light'>Programa Web e mobile para armazenamento e acesso de informações de condomínio. Cadastro de usuários com roles de moradores e funcionários, publicação de documentos oficiais e eventos do condomínio. Implementação de chat para comunicação geral</p>
              <br></br>
              <p className='text-start text-3xl mt-5 font-medium bg-neutral-900'>Dashboard de dados em tempo real</p>
              <p className='text-start text-md italic font-light'>Disponibilização da dados para clientes e colaboradores<br></br>Em progresso<br></br>Papel: Head do projeto<br></br>Tecnologias: AWS, Glue, AWS S3, AWS QuickSight, Python, SQL, Google Ads/Analytics</p>
              <p className='text-start mt-1 text-md font-light'>Disponibilização de dados em tempo real por meio de ETL, tendo como fonte as ferramentas utilizadas, para assim disponibilizar dashboards em tempo real para colaboradores e clientes, com o intuito de eliminar o tempo gasto na criação de dashboards e relatórios</p>
              <br></br>
              <p className='text-start text-3xl mt-5 font-medium bg-neutral-900'>Implementação de geolocalização</p>
              <p className='text-start text-md italic font-light'>Desenvolvimento de feature de geolocalização em ERP<br></br>Entregue | Projeto profissional<br></br>Papel: Scrum Master<br></br>Tecnologias: Jira, Java, React</p>
              <p className='text-start mt-1 text-md font-light'>Nova feature em ERP para clínicas que tinham a necessidade de rastrear em tempo real as suas remessas em razão do seu alto valor comercial</p>
              <br></br>
              <p className='text-start text-3xl mt-5 font-medium bg-neutral-900'>2FA (local)</p>
              <p className='text-start text-md italic font-light'>Simples programa para autentificação de um usuário<br></br>Entregue | Projeto acadêmico<br></br>Papel: desenvolvimento<br></br>Tecnologias: C#</p>
              <p className='text-start mt-1 text-md font-light'>Lógica para o funcionamento de uma parte de aplicação, que ao validar as credenciais envia um código numérico de seis dígitos</p>
              <br></br>
              <p className='text-start text-3xl mt-5 font-medium bg-neutral-900'>Módulo de licitações</p>
              <p className='text-start text-md italic font-light'>Novo módulo em ERP para viabilizar o atendimento para licitações às empresas usuárias do software<br></br>Entregue | Projeto profissional<br></br>Papel: Scrum Master, PO<br></br>Tecnologias: Jira, Java, React</p>
              <p className='text-start mt-1 text-md font-light'>Módulo em sistema que, após estudos, possibilita que os usuários do software tenham um acompanhamento completo de suas licitações e empenhos a serem cumpridos. Conta com soluções como controle de prazos, controle de materiais entregues e pendentes, emissão de notas de serviço, etc</p>
            </div>
          </div>

        </section>

      </main>

    </div>
  )
}
