// Description
//   A Hubot script that returns registered commands
//
// Configuration:
//   None
//
// Commands:
//   None
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  return robot.router.get('/help.json', function(req, res) {
    var commands;
    commands = robot.helpCommands();
    return res.json(commands);
  });
};
