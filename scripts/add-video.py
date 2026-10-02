"""Add a verified TikTok post: python3 scripts/add-video.py URL --title TITLE --thumbnail URL_OR_LOCAL_PATH"""
import argparse, json, re
from pathlib import Path
from html import escape
parser=argparse.ArgumentParser()
parser.add_argument('url'); parser.add_argument('--title',required=True);parser.add_argument('--thumbnail',required=True)
a=parser.parse_args()
m=re.fullmatch(r'https://(?:www\.)?tiktok\.com/@iiankehn/video/(\d+)(?:\?.*)?',a.url)
if not m: parser.error('Use a full @iiankehn/video/ID TikTok post URL.')
root=Path(__file__).resolve().parent.parent
video_id=m.group(1);url=f'https://www.tiktok.com/@iiankehn/video/{video_id}'
data=json.loads((root/'assets/videos.json').read_text())
data=[v for v in data if v['id']!=video_id]
data.insert(0,dict(id=video_id,title=a.title,thumbnail=a.thumbnail,url=url))
template=(root/'scripts/watch-template.html').read_text()
for key,value in [('VIDEO_TITLE',escape(a.title,quote=True)),('VIDEO_ID',video_id),('VIDEO_URL',url)]: template=template.replace(key,value)
(root/'videos').mkdir(exist_ok=True)
(root/'videos'/f'{video_id}.html').write_text(template)
(root/'assets/videos.json').write_text(json.dumps(data,indent=2)+'\n')
print(f'Added videos/{video_id}.html and gallery card')
