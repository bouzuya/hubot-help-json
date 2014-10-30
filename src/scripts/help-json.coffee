# Description
#   A Hubot script that returns registered commands
#
# Configuration:
#   None
#
# Commands:
#   None
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  robot.router.get '/help.json', (req, res) ->
    commands = robot.helpCommands()
    res.json commands
