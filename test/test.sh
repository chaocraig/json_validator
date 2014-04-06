#!/bin/sh
echo "<====== Unit tests =======>";
vows ./test/test.js --xunit --i > ./tests_results.xml;
which jscoverage;
if [ $? -eq 0 ]; then
	echo "<====== Code coverage =======>";
	jscoverage lib lib-cov;
	vows ./test/test.js --cover-xml;
	rm -r lib-cov;
fi
echo "done";
exit
