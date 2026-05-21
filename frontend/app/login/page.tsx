'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client/react';

const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
      user { id email name role }
    }
  }
`;

const REGISTER = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      token
      user { id email name role }
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const [login] = useMutation(LOGIN);
  const [register] = useMutation(REGISTER);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const { data } = isLogin
        ? await login({ variables: { input: { email: form.email, password: form.password } } })
        : await register({ variables: { input: form } });

      const result = isLogin ? data.login : data.register;
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', JSON.stringify(result.user));
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    }
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--bg)',
      backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(0,255,148,0.05) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(77,166,255,0.05) 0%, transparent 60%)'
    }}>
      <div style={{
        width: '100%', maxWidth: '420px', padding: '48px 40px',
        background: 'var(--bg2)', border: '1px solid var(--border)',
        borderRadius: '16px',
      }}>
        {/* Logo */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <div style={{
            fontSize: '11px', letterSpacing: '0.3em', color: 'var(--accent)',
            marginBottom: '12px', textTransform: 'uppercase'
          }}>Urban Traffic Platform</div>
          <h1 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text)' }}>
            {isLogin ? 'Welcome back' : 'Create account'}
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '11px', color: 'var(--text2)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>NAME</label>
              <input
                type="text" placeholder="Your name" value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                style={{
                  width: '100%', padding: '12px 16px', background: 'var(--bg3)',
                  border: '1px solid var(--border)', borderRadius: '8px',
                  color: 'var(--text)', fontSize: '14px', outline: 'none',
                  fontFamily: 'DM Mono, monospace'
                }}
              />
            </div>
          )}

          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '11px', color: 'var(--text2)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>EMAIL</label>
            <input
              type="email" placeholder="your@email.com" value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              style={{
                width: '100%', padding: '12px 16px', background: 'var(--bg3)',
                border: '1px solid var(--border)', borderRadius: '8px',
                color: 'var(--text)', fontSize: '14px', outline: 'none',
                fontFamily: 'DM Mono, monospace'
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontSize: '11px', color: 'var(--text2)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>PASSWORD</label>
            <input
              type="password" placeholder="••••••••" value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              style={{
                width: '100%', padding: '12px 16px', background: 'var(--bg3)',
                border: '1px solid var(--border)', borderRadius: '8px',
                color: 'var(--text)', fontSize: '14px', outline: 'none',
                fontFamily: 'DM Mono, monospace'
              }}
            />
          </div>

          {error && (
            <div style={{
              padding: '12px 16px', background: 'rgba(255,71,87,0.1)',
              border: '1px solid rgba(255,71,87,0.3)', borderRadius: '8px',
              color: 'var(--danger)', fontSize: '13px', marginBottom: '16px'
            }}>{error}</div>
          )}

          <button type="submit" style={{
            width: '100%', padding: '14px',
            background: 'var(--accent)', color: '#0a0c10',
            border: 'none', borderRadius: '8px', fontSize: '14px',
            fontWeight: '700', cursor: 'pointer', fontFamily: 'Syne, sans-serif',
            letterSpacing: '0.05em'
          }}>
            {isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'}
          </button>
        </form>

        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <button onClick={() => setIsLogin(!isLogin)} style={{
            background: 'none', border: 'none', color: 'var(--accent3)',
            fontSize: '13px', cursor: 'pointer', fontFamily: 'DM Mono, monospace'
          }}>
            {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
}