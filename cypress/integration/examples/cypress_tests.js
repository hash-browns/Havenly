describe('Home Page Suite', function() {
  
  it('Loads all 3 package cards', function() {     //3lL31l4BXmLfUZA61SSu3T is the class applied to the 3 pacakges cards
  	cy.visit('https://havenly.com/')
       cy.get(':nth-child(1) > ._3lL31l4BXmLfUZA61SSu3T').contains('Havenly Consult')
       cy.get(':nth-child(2) > ._3lL31l4BXmLfUZA61SSu3T').contains('Havenly Mini')
       cy.get(':nth-child(3) > ._3lL31l4BXmLfUZA61SSu3T').contains('Havenly Full')
     
  })

  it('Loads in less than 3.5s', function() {
  	cy.visit('https://havenly.com/',{ timeout: 3500 }) //This will fail since not all stylesheets and scripts are finished loading before cypress receives the 'load' event
  })

})


