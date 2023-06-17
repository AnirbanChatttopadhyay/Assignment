package stepDefinations;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import helper.TestContext;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import pageObjects.HomePage;

public class HomePageSteps {

    TestContext testContext;
    HomePage homePage;

    private static Logger log = LogManager.getLogger(HomePageSteps.class);

    public HomePageSteps(TestContext testContext) {
        this.testContext = testContext;
        this.homePage = testContext.getPageObjectManager().getHomePage();
    }

    @And("^I navigate to the PwC Digital Pulse website$")
    public void UserIsInsideHomePage() throws Throwable {
        homePage.navigate();
    }



    @When("I am viewing the \"(.*)\" page")
    public void IAmViewingThePage(String pageName) {
        homePage.verifyHomePageOpened(pageName);
        log.info("Home page :: displayed");
    }

    @Then("I am presented with \"(.*)\" columns of articles")
    public void iAmPresentedWithColumnsOfArticles(String colNum) {

        int col = Integer.parseInt(colNum);
        homePage.verifyColumnNumbers(col);
        log.info("3 columns::present at article");
    }

    @And("The Left \"(.*)\" column is displaying \"(.*)\" articles")
    public void theLeftColumnIsDisplayingArticles(String column,String articleNum) {
        int articleNumbers = Integer.parseInt(articleNum);
        homePage.verifyArticlesNumbers(Integer.parseInt(column),articleNumbers);
        log.info("2 articles:: present at left column");
    }

    @And("the Middle \"(.*)\" column is displaying \"(.*)\" articles")
    public void theMiddleColumnIsDisplayingArticles(String column,String articleNum) {
        int articleNumbers = Integer.parseInt(articleNum);
        homePage.verifyArticlesNumbers(Integer.parseInt(column),articleNumbers);
        log.info("1 article :: present at middle column");
    }

    @And("The Right \"(.*)\" is displaying \"(.*)\" articles")
    public void theRightColumnIsDisplayingArticles(String column,String articleNum) {
        int articleNumbers = Integer.parseInt(articleNum);
        homePage.verifyArticlesNumbers(Integer.parseInt(column),articleNumbers);
        log.info("4 articles:: present at right column");
    }

    @When("I click on the Subscribe navigation link")
    public void iClickOnTheSubscribeNavigationLink() {
        homePage.clickSubscribe();
        log.info("Clicked Subscribe Link");
    }

    @When("I click on the Magnifying glass icon to perform a search")
    public void iClickOnTheMagnifyingGlassIconToPerformASearch() {
        homePage.clickSearchButton();
        log.info("Clicked on Search Button");
    }


    @And("I enter the text \"(.*)\"")
    public void iEnterTheTextSinglePageApplications(String input) {

         homePage.enterTextIntoSearchbox(input);
         log.info("Text entered into the Searchbox");
    }

    @And("I submit the search")
    public void iSubmitTheSearch() {

        homePage.clickOnSubmitSearchButton();
        log.info("Clicked on the Submit Search button");
    }



}
