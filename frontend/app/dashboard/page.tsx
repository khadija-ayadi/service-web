'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client';


const ME = gql`query { me { id email name role } }`;

const stats = [
  { label: 'Active Vehicles', value: '247', change: '+12', color: '#00ff94' },
  { label: 'Incidents Today', value: '8', change: '-3', color: '#ff6b35' },
  { label: 'Traffic Zones', value: '34', change: '+2', color: '#4da6ff' },
  { label: 'Notifications', value: '156', change: '+28', color: '#ffa502' },
];

const recentIncidents = [
  { id: 1, type: 'ACCIDENT', location: 'Avenue Habib Bourguiba', status: 'IN_PROGRESS', time: '10 min ago' },
  { id: 2, type: 'TRAFFIC_JAM', location: 'Rue de la Liberté', status: 'REPORTED', time: '25 min ago' },
  { id: 3, type: 'WORKS', location: 'Boulevard du 7 Novembre', status: 'RESOLVED', time: '1h ago' },
  { id: 4, type: 'CLOSED_ROAD', location: 'Rue Ibn Khaldoun', status: 'REPORTED', time: '2h ago' },
];

const statusColor: Record<string, string> = {
  REPORTED: '#ffa502',
  IN_PROGRESS: '#4da6ff',
  RESOLVED: '#00ff94',
};

const typeIcon: Record<string, string> = {
  ACCIDENT: '💥',
  TRAFFIC_JAM: '🚗',
  WORKS: '🔧',
  CLOSED_ROAD: '🚧',
};

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const { data } = useQuery(ME);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) { router.push('/login'); return; }
    const u = localStorage.getItem('user');
    if (u) setUser(JSON.parse(u));
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex' }}>
      {/* Sidebar */}
      <aside style={{
        width: '240px', background: 'var(--bg2)', borderRight: '1px solid var(--border)',
        padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '8px',
        position: 'fixed', height: '100vh'
      }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: '4px' }}>UTP</div>
          <div style={{ fontSize: '16px', fontWeight: '800', fontFamily: 'Syne, sans-serif' }}>Urban Traffic</div>
        </div>

        {[
          { icon: '◉', label: 'Dashboard', active: true },
          { icon: '🚗', label: 'Vehicles', active: false },
          { icon: '🗺️', label: 'Traffic Zones', active: false },
          { icon: '⚠️', label: 'Incidents', active: false },
          { icon: '🔔', label: 'Notifications', active: false },
        ].map(item => (
          <div key={item.label} style={{
            padding: '10px 14px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px',
            background: item.active ? 'rgba(0,255,148,0.1)' : 'transparent',
            color: item.active ? 'var(--accent)' : 'var(--text2)',
            border: item.active ? '1px solid rgba(0,255,148,0.2)' : '1px solid transparent',
            display: 'flex', gap: '10px', alignItems: 'center'
          }}>
            <span>{item.icon}</span>{item.label}
          </div>
        ))}

        <div style={{ marginTop: 'auto' }}>
          <div style={{
            padding: '12px 14px', background: 'var(--bg3)', borderRadius: '8px',
            border: '1px solid var(--border)', marginBottom: '8px'
          }}>
            <div style={{ fontSize: '12px', color: 'var(--text)', fontWeight: '600' }}>{user?.name || data?.me?.name}</div>
            <div style={{ fontSize: '10px', color: 'var(--accent)', marginTop: '2px' }}>{user?.role || data?.me?.role}</div>
          </div>
          <button onClick={logout} style={{
            width: '100%', padding: '10px', background: 'transparent',
            border: '1px solid var(--border)', borderRadius: '8px',
            color: 'var(--text2)', fontSize: '12px', cursor: 'pointer',
            fontFamily: 'DM Mono, monospace'
          }}>Sign out</button>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ marginLeft: '240px', flex: 1, padding: '40px' }}>
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>Dashboard</h1>
          <p style={{ color: 'var(--text2)', fontSize: '13px' }}>Real-time urban traffic overview</p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '40px' }}>
          {stats.map(stat => (
            <div key={stat.label} style={{
              background: 'var(--bg2)', border: '1px solid var(--border)',
              borderRadius: '12px', padding: '24px',
              borderTop: `2px solid ${stat.color}`
            }}>
              <div style={{ fontSize: '11px', color: 'var(--text2)', letterSpacing: '0.1em', marginBottom: '12px' }}>{stat.label.toUpperCase()}</div>
              <div style={{ fontSize: '36px', fontWeight: '800', fontFamily: 'Syne, sans-serif', color: stat.color }}>{stat.value}</div>
              <div style={{ fontSize: '12px', color: 'var(--text2)', marginTop: '8px' }}>
                <span style={{ color: stat.change.startsWith('+') ? '#00ff94' : '#ff4757' }}>{stat.change}</span> this week
              </div>
            </div>
          ))}
        </div>

        {/* Recent Incidents */}
        <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>Recent Incidents</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {recentIncidents.map(inc => (
              <div key={inc.id} style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '16px', background: 'var(--bg3)', borderRadius: '8px',
                border: '1px solid var(--border)'
              }}>
                <span style={{ fontSize: '24px' }}>{typeIcon[inc.type]}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '4px' }}>{inc.type.replace('_', ' ')}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text2)' }}>{inc.location}</div>
                </div>
                <div style={{
                  padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '600',
                  background: `${statusColor[inc.status]}20`,
                  color: statusColor[inc.status],
                  border: `1px solid ${statusColor[inc.status]}40`
                }}>{inc.status.replace('_', ' ')}</div>
                <div style={{ fontSize: '11px', color: 'var(--text2)', minWidth: '80px', textAlign: 'right' }}>{inc.time}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}