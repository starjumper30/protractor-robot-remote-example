*** Settings ***
Library    Remote    http://localhost:${PORT}

*** Variables ***
${HOST}    localhost
${PORT}    8270

*** Test Cases ***

Load App
    Start Protractor
    Verify App Load

Shutdown
    Stop Protractor


*** Keywords ***

Verify App Load
    Navigate To Page    App
    ${pText} =    App Page Get Paragraph Text
    Should Contain    ${pText}  Welcome to app!


