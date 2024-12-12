# Ontology Visualizer
![image](https://github.com/superheavytail/ontology-visualizer/assets/11497545/1a3c4540-f71e-496b-ad66-36bf1bb8783a)

## 빠른 시작

- Docker와 Docker Compose를 사용하여 애플리케이션을 실행합니다:
   ```sh
   docker-compose up --build
   ```

## 기능

- `nodes_data.json`과 `edges_data.json` 파일을 읽습니다.
- 룰(또는 룰 유닛)을 노드로 시각화합니다.
- 상호 참조를 엣지로 시각화합니다.

## Docker Compose로 실행하기

Docker Compose를 사용하여 Ontology Visualizer를 실행하려면 다음 단계를 따르세요:

1. Docker와 Docker Compose가 설치되어 있는지 확인합니다.
2. `nodes_data.json`과 `edges_data.json` 파일을 이 저장소의 루트 디렉토리에 위치시킵니다.
3. 다음 `docker-compose.yml` 구성을 사용하여 애플리케이션을 빌드하고 실행합니다:

```yaml
version: '3.8'

services:
  tomok-ontology-visualizer:
    build:
      context: tomok-ontology-visualizer
    ports:
      - "5173:5173"
    volumes:
      - ./edges_data.json:/app/src/edges_data.json
      - ./nodes_data.json:/app/src/nodes_data.json
    command: ["npx", "vite", "--host", "0.0.0.0"]
```

4. 애플리케이션을 실행합니다:

   ```sh
   docker-compose up --build
   ```

## 환경 변수 변경하기

`docker-compose.yml` 파일에서 포트나 파일 경로와 같은 환경 변수를 변경하려면 다음 단계를 따르세요:

1. **포트 변경:**
   `ports` 섹션을 수정하여 다른 호스트 포트를 컨테이너 포트에 매핑합니다. 예를 들어, 호스트 포트를 8080으로 변경하려면:
   ```yaml
   ports:
     - "8080:5173"
   ```

2. **파일 경로 변경:**
   `volumes` 섹션을 수정하여 다른 호스트 파일 경로를 컨테이너 경로에 매핑합니다. 예를 들어, `nodes_data.json`과 `edges_data.json`의 경로를 변경하려면:
   ```yaml
   volumes:
     - /path/to/your/edges_data.json:/app/src/edges_data.json
     - /path/to/your/nodes_data.json:/app/src/nodes_data.json
   ```

필요한 변경 사항을 적용한 후, 애플리케이션을 다시 빌드하고 실행합니다:
```sh
docker-compose up --build
```