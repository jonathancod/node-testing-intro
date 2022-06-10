import fs from 'fs'
import request from 'request'

import { expect } from 'chai'

import { saveWebpage } from './webpage'

describe('The webpage module', function () {
  it('saves the content', function * () {
    const url = 'google.com'
    const content = '<h1>title</h1>'
    const writeFileStub = this.sandbox.stub(fs, 'writeFile', function (filePath, fileContent, cb) {
      cb(null)
    })

    const requestStub = this.sandbox.stub(request, 'get', function (url, cb) {
      cb(null, null, content)
    })

    const result = yield saveWebpage(url)

    expect(writeFileStub).to.be.calledWith()
    expect(requestStub).to.be.calledWith(url)
    expect(result).to.eql('page')
  })
})
