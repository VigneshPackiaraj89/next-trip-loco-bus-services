npm run start-background

case "$1" in 
    case-open)
        cypress open
        ;;
    *)
        cypress run --browser chrome

 esac