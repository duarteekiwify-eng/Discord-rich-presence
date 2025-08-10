const RPC = require('discord-rpc');
const clientId = '1404188050036359342';
const rpc = new RPC.Client({ transport: 'ipc' });

RPC.register(clientId);

rpc.on('ready', () => {
  rpc.setActivity({
    details: 'Jogando', // ← atualizado aqui
    state: 'Forza Horizon 5',
    startTimestamp: new Date(),
    largeImageKey: 'forza_horizon_5',
    largeImageText: 'Forza Horizon 5',
    instance: false,
  });

  console.log('🟢 Rich Presence ativo no Discord!');
});

rpc.login({ clientId }).catch(console.error);
