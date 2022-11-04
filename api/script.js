csrf_token_cookie = self.request.cookies.get('g_csrf_token')
if not csrf_token_cookie:
    webapp2.abort(400, 'No CSRF token in Cookie.')
csrf_token_body = self.request.get('g_csrf_token')
if not csrf_token_body:
    webapp2.abort(400, 'No CSRF token in post body.')
if csrf_token_cookie != csrf_token_body:
    webapp2.abort(400, 'Failed to verify double submit cookie.')
