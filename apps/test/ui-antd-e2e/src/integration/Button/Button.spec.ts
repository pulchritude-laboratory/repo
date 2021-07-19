describe('ui-antd: Button component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=button--primary&args=label;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui-antd!');
    });
});
