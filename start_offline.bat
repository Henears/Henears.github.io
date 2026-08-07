@echo off
rem Open game hub directly via file:// (no server).
rem HTML5 games play fine. For Flash (e.g. Metal Slug) use start_game.bat.
start "" "%~dp0web\game\index.html"