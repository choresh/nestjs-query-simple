const fs = require('fs');
const path = require('path');

module.exports.sprint = fs.readFileSync(path.join(__dirname, 'sprint.graphql'), 'utf8');
module.exports.sprints = fs.readFileSync(path.join(__dirname, 'sprints.graphql'), 'utf8');
module.exports.taskSprintJunction = fs.readFileSync(path.join(__dirname, 'taskSprintJunction.graphql'), 'utf8');
module.exports.taskSprintJunctions = fs.readFileSync(path.join(__dirname, 'taskSprintJunctions.graphql'), 'utf8');
module.exports.task = fs.readFileSync(path.join(__dirname, 'task.graphql'), 'utf8');
module.exports.tasks = fs.readFileSync(path.join(__dirname, 'tasks.graphql'), 'utf8');
module.exports.tenantBilling = fs.readFileSync(path.join(__dirname, 'tenantBilling.graphql'), 'utf8');
module.exports.tenantBillings = fs.readFileSync(path.join(__dirname, 'tenantBillings.graphql'), 'utf8');
module.exports.tenant = fs.readFileSync(path.join(__dirname, 'tenant.graphql'), 'utf8');
module.exports.tenants = fs.readFileSync(path.join(__dirname, 'tenants.graphql'), 'utf8');
module.exports.user = fs.readFileSync(path.join(__dirname, 'user.graphql'), 'utf8');
module.exports.users = fs.readFileSync(path.join(__dirname, 'users.graphql'), 'utf8');
module.exports.userByIndex = fs.readFileSync(path.join(__dirname, 'userByIndex.graphql'), 'utf8');
module.exports.demonstrateComplexQuery = fs.readFileSync(path.join(__dirname, 'demonstrateComplexQuery.graphql'), 'utf8');
module.exports.demonstrateTransactionBlock = fs.readFileSync(path.join(__dirname, 'demonstrateTransactionBlock.graphql'), 'utf8');
module.exports.demonstrateTransactionFlow = fs.readFileSync(path.join(__dirname, 'demonstrateTransactionFlow.graphql'), 'utf8');
module.exports.demonstrateTransactionLock = fs.readFileSync(path.join(__dirname, 'demonstrateTransactionLock.graphql'), 'utf8');