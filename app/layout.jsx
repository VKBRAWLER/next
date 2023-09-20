"use client";
import "@/styles/globals.css";
import NoteState from "@/context/noteState";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <NoteState>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
        </NoteState>
      </Provider>
    </body>
  </html>
);

export default RootLayout;