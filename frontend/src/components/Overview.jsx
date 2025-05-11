import React from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStylesOverview.js";
import { Link } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const LoginButton = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: #0056b3;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00ffff;
    color: #000000;
  }
`;

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #1613d628;
  `
;

const Section = styled.section`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h3`
  font-size: 1.25rem;
  margin-top: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #1c1c1c;
  font-weight: bolder;
`;

export default function Overview() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Visão Geral do TaskFlow</Title>
        <Paragraph>
          TaskFlow é uma aplicação web moderna para organização de tarefas de forma visual, dinâmica e eficiente, pensada para ajudar usuários a acompanhar seu fluxo de trabalho com clareza e controle total.
        </Paragraph>

        <Section>
          <Zoom zoomMargin={50}>
            <img
              src="/images/dashboard.avif"
              alt="Tarefas"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
              }}
            />
          </Zoom>
          <div>
            <Subtitle>Gerenciamento de Tarefas</Subtitle>
            <Paragraph>
              Crie, edite, delete e visualize tarefas organizadas em colunas (como um Kanban). Cada tarefa pode conter título, descrição, prioridade, status e até subtarefas quando em progresso.
            </Paragraph>
          </div>
        </Section>

        <Section>
        <Zoom zoomMargin={50}>
              <img
                src="/images/painelDeLogin.avif"
                alt="Autenticação"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",

                }}
              />
            </Zoom>
          <div>
            <Subtitle>Autenticação Segura</Subtitle>
            <Paragraph>
              Apenas usuários autenticados podem acessar o sistema. O login é feito com email e senha. Um token JWT é usado para manter sessões seguras.
            </Paragraph>
          </div>
        </Section>

        <Section>

            <Zoom zoomMargin={50}>
              <img
                src="/images/flows.avif"
                alt="Organização"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",

                }}
              />
            </Zoom>  
          <div>
            <Subtitle>Organização por Colunas</Subtitle>
            <Paragraph>
              As tarefas são agrupadas em "flows" como A Fazer, Em Progresso e Concluído, oferecendo uma visão clara do progresso do usuário.
            </Paragraph>
          </div>
        </Section>

        <Section>

            <Zoom zoomMargin={50}>
              <img
                src="/images/ImagemDasTarefas.avif"
                alt="Interatividade"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",

                }}
              />
            </Zoom>  
          <div>
            <Subtitle>Interface Dinâmica</Subtitle>
            <Paragraph>
              A interface responde em tempo real a atualizações como marcação de tarefa concluída, movimentação entre colunas e adição de subtarefas.
            </Paragraph>
          </div>
        </Section>

        <Section>
        <Zoom zoomMargin={50}>
              <img
                src="/images/timeline.avif"
                alt="Tela timeline"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",

                }}
              />
            </Zoom>
          <div>
            <Subtitle>Timeline para subtarefas</Subtitle>
            <Paragraph>
              Para ajudar a gerenciar melhor as suas tarefas, uma timeline com todas as operações do (CRUD) criação, busca, atualização e deleção.
            </Paragraph>
          </div>
        </Section>

        <Section>
        <Zoom zoomMargin={50}>
              <img
                src="/images/listaDeTarefas.avif"
                alt="Tela de tarefas"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",

                }}
              />
            </Zoom>
          <div>
            <Subtitle>Pagina dinâmica</Subtitle>
            <Paragraph>
              Suas tarefas melhor organizadas, tudo salvo em banco de dados  PostgreSQL.
            </Paragraph>
          </div>
        </Section>

        <Section>
        <Zoom zoomMargin={50}>
              <img
                src="/images/webSockets.avif"
                alt="Tela Websocket"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",

                }}
              />
            </Zoom>
          <div>
            <Subtitle>Integração WebSockets</Subtitle>
            <Paragraph>
              COm o WebSockets voçê tem uma experiência mais imersiva, em todas as suas ações na pagina principal.
            </Paragraph>
          </div>
        </Section>

        <Subtitle>Fluxo de Autenticação</Subtitle>
        <Paragraph>
          Usuário acessa a página de login e insere suas credenciais. Um token JWT é gerado no back-end e armazenado no localStorage. Esse token é usado para autenticar todas as requisições protegidas. Logout limpa o token do navegador.
        </Paragraph>

        <Subtitle>Por que usar o TaskFlow?</Subtitle>
        <ul>
          <li>✅ Interface simples e responsiva</li>
          <li>✅ Organização estilo Kanban</li>
          <li>✅ Subtarefas e timelines em progresso</li>
          <li>✅ Backend robusto com PostgreSQL</li>
          <li>✅ WebSocket para tempo real</li>
        </ul>

        <LoginButton to="/login">Acessar TaskFlow</LoginButton>
      </Container>
    </>
  );
}
