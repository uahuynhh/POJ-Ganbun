from oannim import oann
def thiali(s):
  chuim = ["m", "n", "ng", "p", "b", "t", "k", "g", "ph", "th", "kh", "ch", "j", "chh", "s", "h", "l"]
  booim = ["i", "iⁿ", "u", "uⁿ", "e", "eⁿ", "o", "o͘", "oⁿ", "a", "aⁿ", "m", "ng", "eng"]
  hophakbooim = ["ai", "au", "ia", "iu", "io", "ioo","oa", "oe", "ui", "iau", "oai"]
  imchiap = ["a","a","aⁿ","aⁿ","aih","aⁿh","ah","ah","ahⁿ","ahⁿ","ai","ai","aiⁿ","aiⁿ","ak","ak","am","am","an","an","ang","ang","ap","ap","at","at","au","auⁿ","auh","auhⁿ","e","e","eⁿ","eⁿ","eh","eh","ehⁿ","ehⁿ","ek","ek","eng","eng", "eⁿh","i","i","iⁿ","iⁿ","ia","ia","iaⁿ","iaⁿ","iah","iah","iahⁿ","iahⁿ","iak","iak","iam","iam","ian","ian","iang","iang","iap","iap","iat","iat","iaⁿh","iau","iau","iauⁿ","iauⁿ","iauh","iauh","ih","ih", "ir", "ee", "er" "im","im","in","in","io","io","ioh","ioh","iok","iok","iong","iong","ip","ip","it","it","iu","iu","iuⁿ","iuⁿ","iuh","iuhⁿ", "ioⁿ", "io", "iohⁿ","m","m","mh","mh","ng","ng","ngh","ngh","o","o","oⁿ","oⁿ","o͘","o͘","oa","oa","oaⁿ","oaⁿ","oah","oah","oai","oⁿh","oai","oaiⁿ","oaiⁿ","oan","oan","oang","oang","oat","oat","oe","oe","oeh","oeh","oh","oh","o͘h","o͘h","o͘ⁿ","ohⁿ","ohⁿ","ok","ok","op","om","om","ong","ong","oⁿ", "oaih", "u","u","uh","uh","ui","ui", "uih","un","un","ut","ut", "uiⁿ", "uiⁿh", "iⁿh"]
  boe = ["p", "t", "k", "h", "m", "n", "ng", "ⁿ", "ⁿh", "hⁿ"]
  process = oann(s)
  # print(process)
  ina = process[0]
  chuim_output = ""
  hophak = ""
  boo = ""
  boe_output = ""
  roundout = "" #theh chú im
  round2out = "" 
  round3out = ""
  finish = False
  if s == None:
    return "", "", "", "", 0
  for i in chuim:
    s = ina.split(i, 1)
    # print(s)
    if len(s) == 2:
      if s[0] == "":
        if s[1] in imchiap:
          chuim_output = i
          roundout = s[1]
        elif s[1] == "" and len(i) == 1:
          if i != "m":
            chuim_output = i
            return chuim_output, "", "", "", 0

  for i in hophakbooim:

    if len(roundout) == 0:
      s = ina.split(i)
    else:
      s = roundout.split(i)
    
    if len(s) != 1:
      if s[0] == "":
        if s[1] == "":
          hophak = i
          round2out = s[1]
          finish = True
          break
        hophak = i
        round2out = s[1]

  for i in booim:

    if finish:
      break

    if len(round2out) == 0:
      if len(roundout) == 0:
        s = ina.split(i)
      else:
        s = roundout.split(i)
    else:
      s = round2out.split(i)
    
    if len(s) != 1:
      if s[0] == "":
        if s[1] == "":
          boo = i
          round3out = s[1]
          finish = True
          break
        boo = i
        round3out = s[1]

  for i in boe:
    if finish:
      break
    if len(round3out) == 0:
      s = round2out.split(i)
    else:
      s = round3out.split(i)
    # print(s,i)
    if len(s) != 1:
      if s[0] == "":
        if s[1] == "":
          boe_output = i
        
  return chuim_output, hophak, boo, boe_output, process[1]