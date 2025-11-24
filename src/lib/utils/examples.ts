// src/lib/utils/examples.ts
export const examples = [
  {
    name: 'Email Address',
    pattern: '^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\\.([a-zA-Z]{2,})$'
  },
  {
    name: 'URL (HTTP/HTTPS)',
    pattern: '^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$'
  },
  {
    name: 'IPv4 Address',
    pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$'
  },
  {
    name: 'Date (YYYY-MM-DD)',
    pattern: '^\\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\\d|3[01])$'
  },
  {
    name: 'Hex Color',
    pattern: '^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$'
  },
  {
    name: 'Strong Password',
    pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
  },
  {
    name: 'UUID v4',
    pattern: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$'
  },
  {
    name: 'Catastrophic Example',
    pattern: '(a+)+'
  }
];