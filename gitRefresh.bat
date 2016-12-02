git add .
git status
set /P commit_name="Please, make up the commit name:"
git commit -m "%commit_name%"
git push -u origin master