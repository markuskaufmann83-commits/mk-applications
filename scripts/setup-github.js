import { execSync } from 'child_process';

// Get token from git credential manager
const credsRaw = execSync('git credential fill', {
  input: 'protocol=https\nhost=github.com\n',
  encoding: 'utf-8',
});

let token = '';
for (const line of credsRaw.split('\n')) {
  if (line.startsWith('password=')) {
    token = line.substring('password='.length).trim();
    break;
  }
}

if (!token) {
  console.error('Kein Token gefunden');
  process.exit(1);
}

console.log('Token ermittelt. Überprüfe Berechtigungen...');

async function main() {
  const userRes = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'NodeJS',
    },
  });

  const oauthScopes = userRes.headers.get('x-oauth-scopes');
  console.log('OAuth Scopes:', oauthScopes);

  if (!userRes.ok) {
    console.error('User fetch failed:', await userRes.text());
    return;
  }

  const user = await userRes.json();
  console.log(`Benutzer eingeloggt: ${user.login}`);

  // Create repository
  console.log('Erstelle Repository mk-applications...');
  const createRes = await fetch('https://api.github.com/user/repos', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      'User-Agent': 'NodeJS',
    },
    body: JSON.stringify({
      name: 'mk-applications',
      description: 'MK Applications - Maßgeschneiderte digitale Lösungen',
      private: false,
    }),
  });

  console.log('Create Response Status:', createRes.status);
  const createData = await createRes.json();
  console.log('Create Response Data:', createData);

  if (createRes.ok || createData.name === 'mk-applications') {
    console.log('Repository existiert oder wurde erstellt:', createData.html_url);
    try {
      execSync('git remote remove origin', { stdio: 'ignore' });
    } catch {}
    execSync(`git remote add origin https://github.com/${user.login}/mk-applications.git`);
    console.log('Pushe nach GitHub main...');
    execSync('git push -u origin main', { stdio: 'inherit' });
    console.log('Push erfolgreich!');
  }
}

main().catch(console.error);
