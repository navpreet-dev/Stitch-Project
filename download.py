import urllib.request
import os

urls = {
    "index_raw.html": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzgwOGNjMDdiOGFjZjQxZTdhMDdiOWZmNWIxY2MxMDhlEgsSBxDOhN238hoYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzIyMzM2NzYwODk1NTQ0NjQ0OQ&filename=&opi=89354086",
    "shop_raw.html": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2VmNDM1OTY1NGZkMTRjNTQ5MDBkOGM2YjFhMTBiMmI0EgsSBxDOhN238hoYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzIyMzM2NzYwODk1NTQ0NjQ0OQ&filename=&opi=89354086",
    "product_raw.html": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzRiNTVlODdiNTM5NDQ0NzNhZjYzNWU3ODA5NjBmNTEzEgsSBxDOhN238hoYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzIyMzM2NzYwODk1NTQ0NjQ0OQ&filename=&opi=89354086",
    "about_raw.html": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzNkODUxNDZjMjA4ZjQ0MDg4OTViZDNkMWE0NzY5MjhjEgsSBxDOhN238hoYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzIyMzM2NzYwODk1NTQ0NjQ0OQ&filename=&opi=89354086",
    "contact_raw.html": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzIxNTc1MTM3ZDUzYTQ5YzhhN2JmNzhjOGJjMTdhNDU4EgsSBxDOhN238hoYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzIyMzM2NzYwODk1NTQ0NjQ0OQ&filename=&opi=89354086"
}

for name, url in urls.items():
    print(f"Downloading {name}...")
    urllib.request.urlretrieve(url, name)
    print(f"Downloaded {name}")
