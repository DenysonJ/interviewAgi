import blogPage from '../support/pages/blogPage'

describe('Blog - Campo de Pesquisa', () => {
  beforeEach(() => {
    blogPage.accessBlog()
  })
  it('Dado um termo válido e com resultados digitado no campo de pesquisa, quando o botão pesquisar\
    é pressionado, então são listados os artigos relacionados com o termo', () => {
    const term = 'Teste'
    blogPage.typeAndSearch(term)
    blogPage.validateSearch(term)
  })
  it('Dado uma pesquisa com termo não existente, quando o botão pesquisar é pressionado, então é exibido \
    uma mensagem informando a inexistência de artigos com o termo', () => {
    const term = 'infalível'
    blogPage.typeAndSearch(term)
    blogPage.validateNoResultMessage()
  })
})