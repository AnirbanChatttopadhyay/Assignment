$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/ColumnVerification.feature");
formatter.feature({
  "name": "Validate PwCDigital",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Column verification of Homepage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I navigate to the PwC Digital Pulse website",
  "keyword": "Given "
});
formatter.step({
  "name": "I am viewing the \"\u003cPage-name\u003e\" page",
  "keyword": "When "
});
formatter.step({
  "name": "I am presented with \"\u003cColNum\u003e\" columns of articles",
  "keyword": "Then "
});
formatter.step({
  "name": "The Left \"\u003cLCol\u003e\" column is displaying \"\u003cLeftColumnArticles\u003e\" articles",
  "keyword": "And "
});
formatter.step({
  "name": "the Middle \"\u003cMCol\u003e\" column is displaying \"\u003cMiddleColumnArticles\u003e\" articles",
  "keyword": "And "
});
formatter.step({
  "name": "The Right \"\u003cRCol\u003e\" is displaying \"\u003cRightColumnArticles\u003e\" articles",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Page-name",
        "ColNum",
        "LCol",
        "MCol",
        "RCol",
        "LeftColumnArticles",
        "MiddleColumnArticles",
        "RightColumnArticles"
      ]
    },
    {
      "cells": [
        "Home",
        "3",
        "2",
        "1",
        "3",
        "2",
        "1",
        "4"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Column verification of Homepage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PwC Digital Pulse website",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.UserIsInsideHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am viewing the \"Home\" page",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.IAmViewingThePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am presented with \"3\" columns of articles",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmPresentedWithColumnsOfArticles(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Left \"2\" column is displaying \"2\" articles",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.theLeftColumnIsDisplayingArticles(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Middle \"1\" column is displaying \"1\" articles",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.theMiddleColumnIsDisplayingArticles(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Right \"3\" is displaying \"4\" articles",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.theRightColumnIsDisplayingArticles(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Contact Us verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I navigate to the PwC Digital Pulse website",
  "keyword": "Given "
});
formatter.step({
  "name": "I am viewing the \"\u003cPage-name\u003e\" page",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the Subscribe navigation link",
  "keyword": "When "
});
formatter.step({
  "name": "I am taken to the Subscribe page",
  "keyword": "Then "
});
formatter.step({
  "name": "I am presented with the below fields",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "Field",
        "Required",
        "Type"
      ]
    },
    {
      "cells": [
        "First Name",
        "true",
        "text"
      ]
    },
    {
      "cells": [
        "Last Name",
        "true",
        "text"
      ]
    },
    {
      "cells": [
        "Organisation",
        "true",
        "text"
      ]
    },
    {
      "cells": [
        "Job Title",
        "true",
        "text"
      ]
    },
    {
      "cells": [
        "Business Email Address",
        "true",
        "email"
      ]
    },
    {
      "cells": [
        "State",
        "true",
        "dropdown"
      ]
    },
    {
      "cells": [
        "Country",
        "true",
        "dropdown"
      ]
    }
  ]
});
formatter.step({
  "name": "I will need to complete Google reCAPTCHA before I can complete my request",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Page-name"
      ]
    },
    {
      "cells": [
        "Home"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Contact Us verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PwC Digital Pulse website",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.UserIsInsideHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am viewing the \"Home\" page",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.IAmViewingThePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Subscribe navigation link",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.iClickOnTheSubscribeNavigationLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am taken to the Subscribe page",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscribePageSteps.iAmTakenToTheSubscribePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am presented with the below fields",
  "rows": [
    {
      "cells": [
        "Field",
        "Required",
        "Type"
      ]
    },
    {
      "cells": [
        "First Name",
        "true",
        "text"
      ]
    },
    {
      "cells": [
        "Last Name",
        "true",
        "text"
      ]
    },
    {
      "cells": [
        "Organisation",
        "true",
        "text"
      ]
    },
    {
      "cells": [
        "Job Title",
        "true",
        "text"
      ]
    },
    {
      "cells": [
        "Business Email Address",
        "true",
        "email"
      ]
    },
    {
      "cells": [
        "State",
        "true",
        "dropdown"
      ]
    },
    {
      "cells": [
        "Country",
        "true",
        "dropdown"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SubscribePageSteps.iAmPresentedWithTheBelowFields(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//label[normalize-space(text())\u003d\u0027Country\u0027]\"}\n  (Session info: chrome\u003d114.0.5735.134)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-S4K8BNM\u0027, ip: \u0027192.168.116.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.134, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\HomeUser\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:60216}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: deb949ed4f190439c6617d136bedef18\n*** Element info: {Using\u003dxpath, value\u003d//label[normalize-space(text())\u003d\u0027Country\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pageObjects.SubscribePage.verifyFields(SubscribePage.java:83)\r\n\tat stepDefinations.SubscribePageSteps.iAmPresentedWithTheBelowFields(SubscribePageSteps.java:37)\r\n\tat ✽.I am presented with the below fields(src/test/resources/features/ColumnVerification.feature:21)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I will need to complete Google reCAPTCHA before I can complete my request",
  "keyword": "And "
});
formatter.match({
  "location": "SubscribePageSteps.iWillNeedToCompleteGoogleReCAPTCHABeforeICanCompleteMyRequest()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search Result verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I navigate to the PwC Digital Pulse website",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on the Magnifying glass icon to perform a search",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the text \"\u003cTextToEnter\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I submit the search",
  "keyword": "And "
});
formatter.step({
  "name": "I am taken to the search results page",
  "keyword": "Then "
});
formatter.step({
  "name": "I am presented with at least \"\u003cMinNoResults\u003e\" search result",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "TextToEnter",
        "MinNoResults"
      ]
    },
    {
      "cells": [
        "Single page applications",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search Result verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PwC Digital Pulse website",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.UserIsInsideHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Magnifying glass icon to perform a search",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.iClickOnTheMagnifyingGlassIconToPerformASearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the text \"Single page applications\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iEnterTheTextSinglePageApplications(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I submit the search",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iSubmitTheSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am taken to the search results page",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchResultPageSteps.iAmTakenToTheSearchResultsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am presented with at least \"1\" search result",
  "keyword": "And "
});
formatter.match({
  "location": "SearchResultPageSteps.iAmPresentedWithAtLeastSearchResult(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});