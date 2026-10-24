import test from 'node:test';import assert from 'node:assert/strict';
import policy from '../desktop/connection-policy.cjs';
test('client accepts HTTPS origins and exact loopback HTTP only',()=>{
  assert.equal(policy.normalizeServer('http://localhost:3000/'),'http://localhost:3000');
  assert.equal(policy.normalizeServer(' http://127.0.0.1:3000 '),'http://127.0.0.1:3000');
  assert.equal(policy.normalizeServer('http://[::1]:3000'),'http://[::1]:3000');
  assert.equal(policy.normalizeServer('https://game.example.com'),'https://game.example.com');
});
test('client rejects credential injection, remote HTTP and arbitrary schemes/paths',()=>{
  for(const value of ['http://game.example.com','http://localhost.evil.test','https://u:p@example.com','file:///C:/Windows','javascript:alert(1)','https://example.com/login','https://example.com/?x=1','https://example.com/#x',{},null,''])assert.throws(()=>policy.normalizeServer(value));
});
