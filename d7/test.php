<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json'); //Server weiß so, was er schicken soll
//*.. alle dürfen datei ansprechen
//header('Content-Type:text/javascript'); //bei jsonp, hier brauche ich obiges nicht, weil das alle dürfen
echo 'Hallo Server!';
echo file_get_contents('https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml'); // für währungsrechner
// diese DAtei darf auch von anderen angesprochen werden
