const ldap = require('ldapjs')
const server = ldap.createServer()
const port = 1389

server.search('', (req, res, next) => {
  // Print request attributes to the console
  console.log(req);

  // Dummy response
  res.send({
    dn: '',
    attributes: {}
  })

  res.end()
})

server.listen(port, () => {
  console.log(`LDAP server listening at ${server.url}`)
})