clear
read -p "Host [ENTER=https://autax-exenza.c9users.io] :" host
clear
host=${host:-"https://autax-exenza.c9users.io"}
echo "Host set to '$host'"
echo
read -p "PORT [ENTER=443] :" port
clear
port=${port:-443}
echo "Porst set to '$port'"
echo
read -p "First Name [ENTER=John] :" firstName
clear
firstName=${firstName:-John}
echo "firstName set to '$firstName'"
echo
read -p "Last Name [ENTER=Smith] :" lastName
clear
lastName=${lastName:-Smith}
echo "lastName set to '$lastName'"
echo
read -p "Amount: [ENTER: 60050]" amount
clear
amount=${amount:-60050}
echo "Amount set to '$amount'"
echo
read -p "Period [ENTER=1] :" period
clear
period=${period:-1}
echo "Period set to '$period'"
echo
read -p "Pension: [press enter for default: 0] :" pension
clear
pension=${pension:-0}
echo "pension set to '$pension'%"
echo
read -p "Medicare: [press enter for default: 0] :" medicare
clear
medicare=${medicare:-0}

clear
echo "** Calling AUTAX microservice at $host:$port/payee **"
echo ""
echo ""
curl --data "firstName=$firstName&lastName=$lastName&amount=$amount&period=$period&pension=$pension&medicare=$medicare" $host:$port/payee
echo ""
echo ""
echo " ** END **"
echo ""
echo ""