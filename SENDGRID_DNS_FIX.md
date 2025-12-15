# SendGrid DNS Records - Fix Guide

## ❌ Error Found

**The DMARC record is incorrectly set as a CNAME Record.**
- **Current (WRONG):** Type = `CNAME Record`
- **Should be:** Type = `TXT Record`

DMARC records are **always TXT records**, never CNAME records.

---

## ✅ How to Fix the DMARC Record

1. **Click the red X (Cancel)** on the DMARC record row to cancel the current entry
2. **Click "+ ADD NEW RECORD"**
3. **Select Type:** `TXT Record` (NOT CNAME!)
4. **Host:** `_dmarc.liqwifi.com`
5. **Value:** `v=DMARC1; p=none;`
6. **TTL:** Automatic
7. **Click the green checkmark** to save

---

## ✅ Your Existing Records (These Look Correct!)

### CNAME Records (All Correct ✅)
1. ✅ `url2355.liqwifi.com` → `sendgrid.net` (Link branding)
2. ✅ `58077803.liqwifi.com` → `sendgrid.net` (Verification)
3. ✅ `em9797.liqwifi.com` → `u58077803.wl054.sendgrid.net` (Email subdomain)
4. ✅ `s1._domainkey.liqwifi.com` → `s1.domainkey.u58077803.wl054.sendgrid.net` (DKIM)
5. ✅ `s2._domainkey.liqwifi.com` → `s2.domainkey.u58077803.wl054.sendgrid.net` (DKIM)

### TXT Records
1. ✅ `default._domainkey.liqwifi.com` → `v=DKIM1;k=rsa;p=...` (DKIM public key)

---

## 📋 Complete SendGrid DNS Setup Checklist

### Required Records (from SendGrid Dashboard):

1. **CNAME Records:**
   - ✅ `em9797.liqwifi.com` → `u58077803.wl054.sendgrid.net`
   - ✅ `s1._domainkey.liqwifi.com` → `s1.domainkey.u58077803.wl054.sendgrid.net`
   - ✅ `s2._domainkey.liqwifi.com` → `s2.domainkey.u58077803.wl054.sendgrid.net`

2. **TXT Records:**
   - ✅ `default._domainkey.liqwifi.com` → (DKIM key from SendGrid)
   - ⚠️ `_dmarc.liqwifi.com` → `v=DMARC1; p=none;` (FIX: Change to TXT Record!)

### Optional Records (for link branding):
   - ✅ `url2355.liqwifi.com` → `sendgrid.net`
   - ✅ `58077803.liqwifi.com` → `sendgrid.net`

---

## 🔍 How to Verify in SendGrid

After fixing the DMARC record:

1. Go to **SendGrid Dashboard** → **Settings** → **Sender Authentication**
2. Find your domain (`liqwifi.com`)
3. Click **Verify** or **Check DNS Records**
4. Wait a few minutes for DNS propagation
5. All records should show as ✅ Verified

---

## ⏱️ DNS Propagation

- DNS changes can take **5 minutes to 48 hours** to propagate
- Usually takes **15-30 minutes** for most providers
- After adding the DMARC TXT record, wait a few minutes before verifying in SendGrid

---

## 📝 Summary

**What to do:**
1. ❌ Cancel the current DMARC CNAME record
2. ✅ Add a new **TXT Record** for `_dmarc.liqwifi.com` with value `v=DMARC1; p=none;`
3. ✅ Click "SAVE ALL CHANGES"
4. ✅ Wait 15-30 minutes
5. ✅ Verify in SendGrid dashboard

**All other records look correct!** Just fix the DMARC record type. 🎯

