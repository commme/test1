import os
import re

def modify_html_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # 2번, 11번: 메뉴바에 아티클 = info로 변경
    # <a href="articles/index.html">📖 아티클</a>
    content = content.replace('📖 아티클', '📖 INFO')

    # 3번: 아티클 내용 중 '(Test 1) 관련 아티클' 텍스트 삭제
    content = content.replace('(Test 1) 관련 아티클', '')

    # 6번: 아티클 내용 중 '(Test 2) 관련 아티클' 텍스트 삭제
    content = content.replace('(Test 2) 관련 아티클', '')

    # 4번: 아티클에 이미지 깨지는데, 아예 삭제 해줘
    # <main class="app-container"> 내의 첫 번째 img 태그를 삭제하는 것으로 가정합니다.
    # articles 폴더 내의 파일들에서 <div class="content-box article-content"> 내의 첫 번째 img 태그를 삭제합니다.
    if "articles" in filepath:
        # 정규식을 사용하여 <div class="content-box article-content"> ... </div> 블록을 찾습니다.
        # 그 안에서 첫 번째 <img> 태그를 찾아서 삭제합니다.
        def remove_first_img_in_article_content(match):
            block_content = match.group(1)
            # 첫 번째 <img> 태그를 찾아서 삭제
            modified_block_content = re.sub(r'<img[^>]+>', '', block_content, 1)
            return f'<div class="content-box article-content">{modified_block_content}</div>'

        # DOTALL 플래그는 . 이 줄바꿈 문자를 포함하도록 합니다.
        content = re.sub(r'(<div class="content-box article-content">.*?</div>)', remove_first_img_in_article_content, content, flags=re.DOTALL)


    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Modified {filepath}")
    else:
        print(f"No changes made to {filepath}")

# 모든 HTML 파일 목록
html_files = [
    "index.html",
    "about.html",
    "faq.html",
    "part2.html",
    "privacy.html",
    "terms.html",
    "articles/active.html",
    "articles/analytic.html",
    "articles/artistic.html",
    "articles/business-online.html",
    "articles/business.html",
    "articles/creative.html",
    "articles/diligent.html",
    "articles/freelance.html",
    "articles/index.html",
    "articles/knowledge.html",
    "articles/meticulous.html",
    "articles/social.html",
    "articles/stay.html",
    "articles/tech.html",
]

current_dir = os.getcwd()

for html_file in html_files:
    full_path = os.path.join(current_dir, html_file)
    if os.path.exists(full_path):
        modify_html_file(full_path)
    else:
        print(f"File not found: {full_path}")

print("\nHTML content modifications attempted.")
