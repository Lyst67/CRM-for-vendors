import React from 'react';
import ClientComponent from './components/client-component';
import ServerComponent from './components/server-component';
import ServerComponentCopy from './components/server-component-copy';

// import StatusLabel, { Status } from './components/ststus-label';
export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <ServerComponent />
      <ClientComponent>
        <ServerComponentCopy />
      </ClientComponent>
    </main>
  );
}
/* <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */
