import fs from 'fs'
import axios from 'axios'

import sinon from 'sinon'
import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import { saveWebpage } from './webpage';

describe('The webpage module', function () {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  })

  it('should save the content', async () => {
    const url = 'google.com'
    const content = '<h1>title</h1>'
    
    const writeFileStub = sandbox.stub(fs, 'writeFile').resolves();
    const requestStub = sandbox.stub(axios, 'get').resolves({ data: content, status: 200, statusText: 'ok', headers: {}, config: {} });

    const result = await saveWebpage(url)
    
    expect(writeFileStub).to.be.calledWith(content)
    expect(requestStub).to.be.calledWith(url)
    expect(result).to.eql(content)
  })
})
