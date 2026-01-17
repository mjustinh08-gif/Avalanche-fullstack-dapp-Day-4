import { getBlockchainValue, getBlockchainEvents } from "./services/blockchain.service";

export default async function HomePage() {
  const valueData = await getBlockchainValue();
  const eventsData = await getBlockchainEvents();

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', backgroundColor: '#0f172a', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ color: '#38bdf8', textAlign: 'center' }}>Justin Full Stack dApp</h1>
      
      <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #334155', borderRadius: '12px', backgroundColor: '#1e293b' }}>
        <h3 style={{ color: '#94a3b8', marginTop: 0 }}>Smart Contract Status</h3>
        <p style={{ fontSize: '18px' }}>
          Current Value: <span style={{ color: '#22c55e', fontWeight: 'bold', fontSize: '24px' }}>
            {valueData?.value !== undefined ? valueData.value.toString() : "0"}
          </span>
        </p>
      </div>

      <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #334155', borderRadius: '12px', backgroundColor: '#1e293b' }}>
        <h3 style={{ color: '#94a3b8', marginTop: 0 }}>Transaction Logs</h3>
        {eventsData && eventsData.length > 0 ? (
          <div style={{ backgroundColor: '#000', padding: '10px', borderRadius: '8px', overflowX: 'auto' }}>
            <pre style={{ color: '#22c55e', fontSize: '12px' }}>{JSON.stringify(eventsData, null, 2)}</pre>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px', border: '1px dashed #475569', borderRadius: '8px' }}>
            <p style={{ color: '#64748b', margin: 0 }}>No transactions found on blockchain yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}