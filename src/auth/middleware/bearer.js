Response {
    _events: [Object: null prototype] {},
    _eventsCount: 0,
    _maxListeners: undefined,
    res: IncomingMessage {
      _readableState: ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: true,
        endEmitted: true,
        reading: false,
        sync: true,
        needReadable: false,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        emitClose: true,
        autoDestroy: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrainWriters: null,
        multiAwaitDrain: false,
        readingMore: true,
        decoder: [StringDecoder],
        encoding: 'utf8',
        [Symbol(kPaused)]: false
      },
      readable: false,
      _events: [Object: null prototype] {
        end: [Array],
        data: [Array],
        error: [Array],
        close: [Function: bound emit]
      },
      _eventsCount: 4,
      _maxListeners: undefined,
      socket: Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        readable: true,
        _events: [Object: null prototype],
        _eventsCount: 7,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: false,
        allowHalfOpen: false,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: null,
        _server: null,
        parser: null,
        _httpMessage: [ClientRequest],
        [Symbol(asyncId)]: 52,
        [Symbol(kHandle)]: [TCP],
        [Symbol(kSetNoDelay)]: true,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: null,
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0
      },
      connection: Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        readable: true,
        _events: [Object: null prototype],
        _eventsCount: 7,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: false,
        allowHalfOpen: false,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: null,
        _server: null,
        parser: null,
        _httpMessage: [ClientRequest],
        [Symbol(asyncId)]: 52,
        [Symbol(kHandle)]: [TCP],
        [Symbol(kSetNoDelay)]: true,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: null,
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0
      },
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      headers: {
        'content-security-policy': "default-src 'none'",
        'x-content-type-options': 'nosniff',
        'content-type': 'text/html; charset=utf-8',
        'content-length': '146',
        date: 'Sun, 16 May 2021 18:44:24 GMT',
        connection: 'close'
      },
      rawHeaders: [
        'Content-Security-Policy',
        "default-src 'none'",
        'X-Content-Type-Options',
        'nosniff',
        'Content-Type',
        'text/html; charset=utf-8',
        'Content-Length',
        '146',
        'Date',
        'Sun, 16 May 2021 18:44:24 GMT',
        'Connection',
        'close'
      ],
      trailers: {},
      rawTrailers: [],
      aborted: false,
      upgrade: false,
      url: '',
      method: null,
      statusCode: 404,
      statusMessage: 'Not Found',
      client: Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        readable: true,
        _events: [Object: null prototype],
        _eventsCount: 7,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: false,
        allowHalfOpen: false,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: null,
        _server: null,
        parser: null,
        _httpMessage: [ClientRequest],
        [Symbol(asyncId)]: 52,
        [Symbol(kHandle)]: [TCP],
        [Symbol(kSetNoDelay)]: true,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: null,
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0
      },
      _consuming: false,
      _dumped: false,
      req: ClientRequest {
        _events: [Object: null prototype],
        _eventsCount: 3,
        _maxListeners: undefined,
        outputData: [],
        outputSize: 0,
        writable: true,
        _last: true,
        chunkedEncoding: false,
        shouldKeepAlive: false,
        _defaultKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: false,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: 42,
        _hasBody: true,
        _trailer: '',
        finished: true,
        _headerSent: true,
        socket: [Socket],
        connection: [Socket],
        _header: 'POST /signup HTTP/1.1\r\n' +
          'Host: 127.0.0.1:34013\r\n' +
          'Accept-Encoding: gzip, deflate\r\n' +
          'Content-Type: application/json\r\n' +
          'Content-Length: 42\r\n' +
          'Connection: close\r\n' +
          '\r\n',
        _keepAliveTimeout: 0,
        _onPendingData: [Function: noopPendingOutput],
        agent: [Agent],
        socketPath: undefined,
        method: 'POST',
        insecureHTTPParser: undefined,
        path: '/signup',
        _ended: true,
        res: [Circular],
        aborted: false,
        timeoutCb: null,
        upgradeOrConnect: false,
        parser: null,
        maxHeadersCount: null,
        reusedSocket: false,
        host: '127.0.0.1',
        protocol: 'http:',
        [Symbol(kCapture)]: false,
        [Symbol(kNeedDrain)]: false,
        [Symbol(corked)]: 0,
        [Symbol(kOutHeaders)]: [Object: null prototype]
      },
      text: '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '<meta charset="utf-8">\n' +
        '<title>Error</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '<pre>Cannot POST /signup</pre>\n' +
        '</body>\n' +
        '</html>\n',
      [Symbol(kCapture)]: false
    },
    request: Test {
      _events: [Object: null prototype] { abort: [Function] },
      _eventsCount: 1,
      _maxListeners: undefined,
      _enableHttp2: false,
      _agent: false,
      _formData: null,
      method: 'POST',
      url: 'http://127.0.0.1:34013/signup',
      _header: { 'content-type': 'application/json' },
      header: { 'Content-Type': 'application/json' },
      writable: true,
      _redirects: 0,
      _maxRedirects: 0,
      cookies: '',
      qs: {},
      _query: [],
      qsRaw: [],
      _redirectList: [],
      _streamRequest: false,
      _buffer: true,
      app: Server {
        insecureHTTPParser: undefined,
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 0,
        _handle: null,
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        maxHeadersCount: null,
        headersTimeout: 60000,
        _connectionKey: '6::::0',
        [Symbol(IncomingMessage)]: [Function: IncomingMessage],
        [Symbol(ServerResponse)]: [Function: ServerResponse],
        [Symbol(kCapture)]: false,
        [Symbol(asyncId)]: 49
      },
      _asserts: [],
      _server: Server {
        insecureHTTPParser: undefined,
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 0,
        _handle: null,
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        maxHeadersCount: null,
        headersTimeout: 60000,
        _connectionKey: '6::::0',
        [Symbol(IncomingMessage)]: [Function: IncomingMessage],
        [Symbol(ServerResponse)]: [Function: ServerResponse],
        [Symbol(kCapture)]: false,
        [Symbol(asyncId)]: 49
      },
      _data: { username: 'qais96', password: 'code401' },
      req: ClientRequest {
        _events: [Object: null prototype],
        _eventsCount: 3,
        _maxListeners: undefined,
        outputData: [],
        outputSize: 0,
        writable: true,
        _last: true,
        chunkedEncoding: false,
        shouldKeepAlive: false,
        _defaultKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: false,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: 42,
        _hasBody: true,
        _trailer: '',
        finished: true,
        _headerSent: true,
        socket: [Socket],
        connection: [Socket],
        _header: 'POST /signup HTTP/1.1\r\n' +
          'Host: 127.0.0.1:34013\r\n' +
          'Accept-Encoding: gzip, deflate\r\n' +
          'Content-Type: application/json\r\n' +
          'Content-Length: 42\r\n' +
          'Connection: close\r\n' +
          '\r\n',
        _keepAliveTimeout: 0,
        _onPendingData: [Function: noopPendingOutput],
        agent: [Agent],
        socketPath: undefined,
        method: 'POST',
        insecureHTTPParser: undefined,
        path: '/signup',
        _ended: true,
        res: [IncomingMessage],
        aborted: false,
        timeoutCb: null,
        upgradeOrConnect: false,
        parser: null,
        maxHeadersCount: null,
        reusedSocket: false,
        host: '127.0.0.1',
        protocol: 'http:',
        [Symbol(kCapture)]: false,
        [Symbol(kNeedDrain)]: false,
        [Symbol(corked)]: 0,
        [Symbol(kOutHeaders)]: [Object: null prototype]
      },
      protocol: 'http:',
      host: '127.0.0.1:34013',
      _endCalled: true,
      _callback: [Function],
      _fullfilledPromise: Promise { [Circular] },
      res: IncomingMessage {
        _readableState: [ReadableState],
        readable: false,
        _events: [Object: null prototype],
        _eventsCount: 4,
        _maxListeners: undefined,
        socket: [Socket],
        connection: [Socket],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers: [Object],
        rawHeaders: [Array],
        trailers: {},
        rawTrailers: [],
        aborted: false,
        upgrade: false,
        url: '',
        method: null,
        statusCode: 404,
        statusMessage: 'Not Found',
        client: [Socket],
        _consuming: false,
        _dumped: false,
        req: [ClientRequest],
        text: '<!DOCTYPE html>\n' +
          '<html lang="en">\n' +
          '<head>\n' +
          '<meta charset="utf-8">\n' +
          '<title>Error</title>\n' +
          '</head>\n' +
          '<body>\n' +
          '<pre>Cannot POST /signup</pre>\n' +
          '</body>\n' +
          '</html>\n',
        [Symbol(kCapture)]: false
      },
      _resBuffered: true,
      response: [Circular],
      called: true,
      [Symbol(kCapture)]: false
    },
    req: ClientRequest {
      _events: [Object: null prototype] {
        drain: [Function],
        error: [Function],
        prefinish: [Function: requestOnPrefinish]
      },
      _eventsCount: 3,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: 42,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      socket: Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        readable: true,
        _events: [Object: null prototype],
        _eventsCount: 7,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: false,
        allowHalfOpen: false,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: null,
        _server: null,
        parser: null,
        _httpMessage: [Circular],
        [Symbol(asyncId)]: 52,
        [Symbol(kHandle)]: [TCP],
        [Symbol(kSetNoDelay)]: true,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: null,
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0
      },
      connection: Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        readable: true,
        _events: [Object: null prototype],
        _eventsCount: 7,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: false,
        allowHalfOpen: false,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: null,
        _server: null,
        parser: null,
        _httpMessage: [Circular],
        [Symbol(asyncId)]: 52,
        [Symbol(kHandle)]: [TCP],
        [Symbol(kSetNoDelay)]: true,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: null,
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0
      },
      _header: 'POST /signup HTTP/1.1\r\n' +
        'Host: 127.0.0.1:34013\r\n' +
        'Accept-Encoding: gzip, deflate\r\n' +
        'Content-Type: application/json\r\n' +
        'Content-Length: 42\r\n' +
        'Connection: close\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: [Function: noopPendingOutput],
      agent: Agent {
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        defaultPort: 80,
        protocol: 'http:',
        options: [Object],
        requests: {},
        sockets: [Object],
        freeSockets: {},
        keepAliveMsecs: 1000,
        keepAlive: false,
        maxSockets: Infinity,
        maxFreeSockets: 256,
        maxTotalSockets: Infinity,
        totalSocketCount: 1,
        scheduling: 'fifo',
        [Symbol(kCapture)]: false
      },
      socketPath: undefined,
      method: 'POST',
      insecureHTTPParser: undefined,
      path: '/signup',
      _ended: true,
      res: IncomingMessage {
        _readableState: [ReadableState],
        readable: false,
        _events: [Object: null prototype],
        _eventsCount: 4,
        _maxListeners: undefined,
        socket: [Socket],
        connection: [Socket],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers: [Object],
        rawHeaders: [Array],
        trailers: {},
        rawTrailers: [],
        aborted: false,
        upgrade: false,
        url: '',
        method: null,
        statusCode: 404,
        statusMessage: 'Not Found',
        client: [Socket],
        _consuming: false,
        _dumped: false,
        req: [Circular],
        text: '<!DOCTYPE html>\n' +
          '<html lang="en">\n' +
          '<head>\n' +
          '<meta charset="utf-8">\n' +
          '<title>Error</title>\n' +
          '</head>\n' +
          '<body>\n' +
          '<pre>Cannot POST /signup</pre>\n' +
          '</body>\n' +
          '</html>\n',
        [Symbol(kCapture)]: false
      },
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: '127.0.0.1',
      protocol: 'http:',
      [Symbol(kCapture)]: false,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype] {
        host: [Array],
        'accept-encoding': [Array],
        'content-type': [Array],
        'content-length': [Array]
      }
    },
    text: '<!DOCTYPE html>\n' +
      '<html lang="en">\n' +
      '<head>\n' +
      '<meta charset="utf-8">\n' +
      '<title>Error</title>\n' +
      '</head>\n' +
      '<body>\n' +
      '<pre>Cannot POST /signup</pre>\n' +
      '</body>\n' +
      '</html>\n',
    body: {},
    files: undefined,
    buffered: true,
    headers: {
      'content-security-policy': "default-src 'none'",
      'x-content-type-options': 'nosniff',
      'content-type': 'text/html; charset=utf-8',
      'content-length': '146',
      date: 'Sun, 16 May 2021 18:44:24 GMT',
      connection: 'close'
    },
    header: {
      'content-security-policy': "default-src 'none'",
      'x-content-type-options': 'nosniff',
      'content-type': 'text/html; charset=utf-8',
      'content-length': '146',
      date: 'Sun, 16 May 2021 18:44:24 GMT',
      connection: 'close'
    },
    statusCode: 404,
    status: 404,
    statusType: 4,
    info: false,
    ok: false,
    redirect: false,
    clientError: true,
    serverError: false,
    error: Error: cannot POST /signup (404)
        at Response.toError (/home/qais/asac/401-code/basic-auth/node_modules/superagent/src/node/response.js:95:15)
        at Response._setStatusProperties (/home/qais/asac/401-code/basic-auth/node_modules/superagent/src/response-base.js:126:48)
        at new Response (/home/qais/asac/401-code/basic-auth/node_modules/superagent/src/node/response.js:41:8)
        at Test._emitResponse (/home/qais/asac/401-code/basic-auth/node_modules/superagent/src/node/index.js:928:20)
        at IncomingMessage.<anonymous> (/home/qais/asac/401-code/basic-auth/node_modules/superagent/src/node/index.js:1130:38)
        at IncomingMessage.emit (events.js:326:22)
        at endReadableNT (_stream_readable.js:1241:12)
        at processTicksAndRejections (internal/process/task_queues.js:84:21) {
      status: 404,
      text: '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '<meta charset="utf-8">\n' +
        '<title>Error</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '<pre>Cannot POST /signup</pre>\n' +
        '</body>\n' +
        '</html>\n',
      method: 'POST',
      path: '/signup'
    },
    created: false,
    accepted: false,
    noContent: false,
    badRequest: false,
    unauthorized: false,
    notAcceptable: false,
    forbidden: false,
    notFound: true,
    unprocessableEntity: false,
    type: 'text/html',
    charset: 'utf-8',
    links: {},
    setEncoding: [Function: bound ],
    redirects: [],
    pipe: [Function],
    [Symbol(kCapture)]: false
  }