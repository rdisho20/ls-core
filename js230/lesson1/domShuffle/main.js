const mainH1 = document.getElementsByTagName('h1')[0];
const mainHeader = document.getElementsByTagName('header')[1];
document.body.insertAdjacentElement('afterbegin', mainHeader);
mainHeader.insertAdjacentElement('afterbegin', mainH1);

const firstFigure = document.getElementsByTagName('figure')[1];
const secondFigure = document.getElementsByTagName('figure')[0];
const mainParagraph = document.getElementsByTagName('p')[0];
mainParagraph.insertAdjacentElement('afterend', firstFigure);
firstFigure.insertAdjacentElement('afterend', secondFigure);
