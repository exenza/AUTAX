clear
read -p "Host [ENTER=localhost] :" host
clear
host=${host:-"localhost"}
echo "Host set to '$host'"
read -p "PORT [ENTER=8080] :" port
clear
port=${port:-8080}
echo "Porst set to '$port'"
read -p "Amount: " amount
clear
echo "Amount set to '$amount'"
read -p "Medicare: [press enter for default: 0] :" medicare
clear
medicare=${medicare:-0}
echo "medicare set to '$medicare'"
read -p "Pension: [press enter for default: 0] :" pension
clear
pension=${pension:-0}
echo "pension set to '$pension'%"
clear
curl --data "firstName=Test&lastName=Test&amount=$amount&period=1&pension=$pension" $host:$port/payee
echo