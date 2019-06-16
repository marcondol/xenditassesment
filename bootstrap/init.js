const Coment = require('../models/comment')
const Org = require('../models/org')
const Orgember = require('../models/orgmember')


exports.init = async ()=> {
  const orgs = await Org.findOrCreate({where: {orgNm: 'xendit'}})
  if(orgs) {
    Orgember.findOrCreate({where: {orgId: 1, firstName: 'John', lastName: 'Doe'}})
    Orgember.findOrCreate({where: {orgId: 1, firstName: 'Mohamad', lastName: 'Arif'}})
  }

}