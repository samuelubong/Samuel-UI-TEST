var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/json-report/report.json',
        output: 'reports/HTMLReport/test-report.html',
        brandTitle: 'Test Report',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        failedSummaryReport: true,
    };

    reporter.generate(options);