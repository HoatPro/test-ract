forever stop 'frontend@raca'
NODE_ENV=production forever --id 'frontend@raca' start -c "node --max-old-space-size=2096" -e forever-err.log server.js
sleep 1
forever logs
