# Namecheap DNS Records Setup for SendGrid

## 🔴 The Problem

SendGrid is showing errors like "but got """ which means the DNS records aren't being found. This usually happens because:

1. **The Host field includes the full domain** when Namecheap auto-appends it
2. **Records aren't saved properly**
3. **DNS hasn't propagated yet** (takes 15-30 minutes)

---

## ✅ How to Add Records in Namecheap (CORRECT WAY)

### Important: Namecheap Auto-Appends the Domain!

When adding DNS records in Namecheap, you should **ONLY enter the subdomain part** in the Host field, NOT the full domain.

**Example:**
- ❌ **WRONG:** Host = `url2355.liqwifi.com` (Namecheap will make it `url2355.liqwifi.com.liqwifi.com`)
- ✅ **CORRECT:** Host = `url2355` (Namecheap will make it `url2355.liqwifi.com`)

---

## 📋 Step-by-Step: Add Each Record

### 1. Go to Namecheap DNS Management

1. Log in to **Namecheap**
2. Go to **Domain List**
3. Click **Manage** next to `liqwifi.com`
4. Go to **Advanced DNS** tab

### 2. Add CNAME Records (5 records)

For each CNAME record below, click **Add New Record** → Select **CNAME Record**:

#### Record 1: Link Branding
- **Type:** CNAME Record
- **Host:** `url2355` ← **ONLY this part!**
- **Value:** `sendgrid.net`
- **TTL:** Automatic (or 30 min)
- Click **Save** ✅

#### Record 2: Verification
- **Type:** CNAME Record
- **Host:** `58077803` ← **ONLY this part!**
- **Value:** `sendgrid.net`
- **TTL:** Automatic
- Click **Save** ✅

#### Record 3: Email Subdomain
- **Type:** CNAME Record
- **Host:** `em9797` ← **ONLY this part!**
- **Value:** `u58077803.wl054.sendgrid.net`
- **TTL:** Automatic
- Click **Save** ✅

#### Record 4: DKIM Key 1
- **Type:** CNAME Record
- **Host:** `s1._domainkey` ← **ONLY this part!**
- **Value:** `s1.domainkey.u58077803.wl054.sendgrid.net`
- **TTL:** Automatic
- Click **Save** ✅

#### Record 5: DKIM Key 2
- **Type:** CNAME Record
- **Host:** `s2._domainkey` ← **ONLY this part!**
- **Value:** `s2.domainkey.u58077803.wl054.sendgrid.net`
- **TTL:** Automatic
- Click **Save** ✅

### 3. Add TXT Records (2 records)

#### Record 1: DKIM Public Key
- **Type:** TXT Record
- **Host:** `default._domainkey` ← **ONLY this part!**
- **Value:** `v=DKIM1;k=rsa;p=MIIBIJANBgkqhkiG9w0BAQEF...` (your full DKIM key from SendGrid)
- **TTL:** Automatic (or 30 min)
- Click **Save** ✅

#### Record 2: DMARC (Optional but Recommended)
- **Type:** TXT Record
- **Host:** `_dmarc` ← **ONLY this part!**
- **Value:** `v=DMARC1; p=none;`
- **TTL:** Automatic
- Click **Save** ✅

---

## 🔍 How to Verify Your Records Are Correct

### In Namecheap:
After adding each record, you should see them listed like this:
- `url2355` → `sendgrid.net` (CNAME)
- `58077803` → `sendgrid.net` (CNAME)
- `em9797` → `u58077803.wl054.sendgrid.net` (CNAME)
- `s1._domainkey` → `s1.domainkey.u58077803.wl054.sendgrid.net` (CNAME)
- `s2._domainkey` → `s2.domainkey.u58077803.wl054.sendgrid.net` (CNAME)
- `default._domainkey` → `v=DKIM1;...` (TXT)
- `_dmarc` → `v=DMARC1; p=none;` (TXT)

### Check Online (Before Verifying in SendGrid):
Use these tools to verify your DNS records are live:

1. **MXToolbox:** https://mxtoolbox.com/SuperTool.aspx
   - Enter: `url2355.liqwifi.com`
   - Select: CNAME Lookup
   - Should show: `sendgrid.net`

2. **DNS Checker:** https://dnschecker.org
   - Enter each hostname
   - Check if it resolves correctly

---

## ⚠️ Common Mistakes to Avoid

1. ❌ **Including full domain in Host field**
   - Wrong: `url2355.liqwifi.com`
   - Right: `url2355`

2. ❌ **Missing the dot at end of CNAME values**
   - Some DNS providers need: `sendgrid.net.` (with trailing dot)
   - Try both if one doesn't work

3. ❌ **Typos in values**
   - Double-check: `u58077803.wl054.sendgrid.net` (exact match)

4. ❌ **Not waiting for DNS propagation**
   - Wait 15-30 minutes after adding records
   - DNS changes aren't instant

---

## ⏱️ After Adding Records

1. **Wait 15-30 minutes** for DNS propagation
2. **Verify records online** using MXToolbox or DNS Checker
3. **Go back to SendGrid** → Settings → Sender Authentication
4. **Click "Verify"** or refresh the page
5. All records should show ✅ Verified

---

## 🔧 If Records Still Don't Work

### Option 1: Check Existing Records
1. In Namecheap, look at your current DNS records
2. **Delete any duplicate or incorrect records**
3. Make sure you don't have:
   - `url2355.liqwifi.com` (wrong - has full domain)
   - `url2355.liqwifi.com.liqwifi.com` (wrong - double domain)

### Option 2: Use @ for Root Domain Records
If Namecheap shows records differently, some might need:
- **Host:** `@` (for root domain records)
- But for SendGrid, you typically use subdomains, so this shouldn't apply

### Option 3: Contact Namecheap Support
If records still don't work after 30 minutes:
- Contact Namecheap support
- Ask them to verify the records are properly configured
- Share the exact hostnames and values from SendGrid

---

## 📝 Quick Checklist

- [ ] Added all 5 CNAME records (Host field = subdomain only)
- [ ] Added 2 TXT records (Host field = subdomain only)
- [ ] Waited 15-30 minutes
- [ ] Verified records online using DNS checker
- [ ] Clicked "Verify" in SendGrid
- [ ] All records show ✅ Verified

---

## 🎯 Summary

**The key issue:** You're probably entering the full domain (`url2355.liqwifi.com`) in the Host field, but Namecheap auto-appends `.liqwifi.com`, so you should only enter the subdomain part (`url2355`).

**Fix:** Delete the existing records and re-add them using **only the subdomain** in the Host field!
